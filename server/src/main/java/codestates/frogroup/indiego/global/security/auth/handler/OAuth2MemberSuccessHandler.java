package codestates.frogroup.indiego.global.security.auth.handler;

import codestates.frogroup.indiego.config.AES128Config;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.redis.RedisDao;
import codestates.frogroup.indiego.global.security.auth.dto.TokenDto;
import codestates.frogroup.indiego.global.security.auth.jwt.TokenProvider;
import codestates.frogroup.indiego.global.security.auth.oauth.OAuthAttributes;
import codestates.frogroup.indiego.global.security.auth.oauth.OAuthCustomUser;
import codestates.frogroup.indiego.global.security.auth.oauth.OAuthUserProfile;
import codestates.frogroup.indiego.global.security.auth.userdetails.AuthMember;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final TokenProvider tokenProvider;
    private final MemberService memberService;
    private final RedisDao redisDao;
    private final AES128Config aes128Config;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authResult) throws IOException, ServletException {

        // OAuth2User oAuth2User = (DefaultOAuth2User) authResult.getPrincipal(); // 기본 구현체 반환하는법!!
        OAuthCustomUser oAuthCustomUser = (OAuthCustomUser) authResult.getPrincipal();
        Map<String, Object> attributes = oAuthCustomUser.getAttributes();
        String registrationId = oAuthCustomUser.getName();
        List<GrantedAuthority> authorities = (List<GrantedAuthority>) oAuthCustomUser.getAuthorities();

        List<String> roles = authorities.stream()
                .map(authority -> {
                    return authority.getAuthority().substring(5);
                })
                .collect(Collectors.toList());

        OAuthUserProfile oAuthUserProfile = OAuthAttributes.extract(registrationId, attributes); // OAuth2Profile 생성
        Member member = memberService.createOauth2Member(oAuthUserProfile, roles); // DB에 권한과 정보 저장 (권한은 1:N 테이블로 설계)
        AuthMember authMember = AuthMember.of(member);

        log.info("# OAuth2.0 AuthenticationSuccess !");

        TokenDto tokenDto = tokenProvider.generateTokenDto(authMember);
        String accessToken = tokenDto.getAccessToken(); // accessToken 만들기
        String refreshToken = tokenDto.getRefreshToken(); // refreshToken 만들기

        log.info("# OAuth2.0 Token generated complete!");

        // 리다이렉트를 하기위한 정보들을 보내줌
        redirect(request,response,accessToken,refreshToken);
    }

    private void redirect(HttpServletRequest request,
                          HttpServletResponse response,
                          String accessToken,
                          String refreshToken) throws IOException {

        // 받은 정보를 토대로 AccessToken, Refresh Token을 만듬
        // Token을 토대로 URI를 만들어서 String으로 변환
        String secretRefreshToken = aes128Config.encryptAes(refreshToken);
        String uri = createURI(request, accessToken, secretRefreshToken).toString();

        // tokenProvider.accessTokenSetHeader(accessToken, response); // Access Token 헤더에 전송
        // tokenProvider.refreshTokenSetHeader(secretRefreshToken,response); // Refresh Token 쿠키에 전송
        int refreshTokenExpirationMinutes = tokenProvider.getRefreshTokenExpirationMinutes();
        redisDao.setValues(refreshToken,accessToken, Duration.ofMinutes(refreshTokenExpirationMinutes)); // redis 저장

        // 만든 URI로 리다이렉트 보냄
        getRedirectStrategy().sendRedirect(request,response,uri);
    }

    private URI createURI(HttpServletRequest request, String accessToken, String secretRefreshToken){
        // 리다이렉트시 JWT를 URI로 보내는 방법
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", secretRefreshToken);

        String serverName = request.getServerName();
        String clientName = serverName.substring(4, serverName.length());

        return UriComponentsBuilder
                .newInstance()
                .scheme("https")
                .host(clientName) // prod = indiego.site , server = devindiego.site
                //.host("localhost")
                .port(443) // https = 443, http = 80
                .path("/token")
                .queryParams(queryParams)
                .build()
                .toUri();
    }
}
