package codestates.frogroup.indiego.global.security.auth.filter;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.redis.RedisDao;
import codestates.frogroup.indiego.global.security.auth.dto.LoginDto;
import codestates.frogroup.indiego.global.security.auth.dto.TokenDto;
import codestates.frogroup.indiego.global.security.auth.jwt.TokenProvider;
import codestates.frogroup.indiego.global.security.auth.userdetails.AuthMember;
import codestates.frogroup.indiego.config.AES128Config;
import codestates.frogroup.indiego.global.security.auth.utils.Responder;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Duration;


@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final MemberService memberService;
    private final TokenProvider tokenProvider;
    private final RedisDao redisDao;
    private final AES128Config aes128Config;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager,
                                   MemberService memberService,
                                   TokenProvider tokenProvider,
                                   RedisDao redisDao,
                                   AES128Config aes128Config) {
        this.authenticationManager = authenticationManager;
        this.memberService = memberService;
        this.tokenProvider = tokenProvider;
        this.redisDao = redisDao;
        this.aes128Config = aes128Config;
    }

    /*
     * Spring Security의 인증처리에서 토큰 생성부분을 가로채서 만듬.
     * 인증 위임을 해당 메서드가 오버라이딩해서 대신 객체를 전달해줌
     * */
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        ObjectMapper objectMapper = new ObjectMapper();

        // ServletInputSteam을 LoginDto 클래스 객체로 역직렬화 (즉, JSON 객체꺼냄)
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);
        log.info("# attemptAuthentication : loginDto.getEmail={}, login.getPassword={}, loginDto.getRole={}",
                loginDto.getEmail(),loginDto.getPassword() ,loginDto.getRole());

        //올바른 권한으로 로그인하는지 확인
        checkRole(loginDto);

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());
        return authenticationManager.authenticate(authenticationToken);
    }

    public void checkRole( LoginDto loginDto){
        if(!memberService.findVerifiedMember(loginDto.getEmail()).getRoles().get(0).equals(loginDto.getRole()) ){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws ServletException, IOException {

        AuthMember authMember = (AuthMember) authResult.getPrincipal();
        TokenDto tokenDto = tokenProvider.generateTokenDto(authMember);
        String accessToken = tokenDto.getAccessToken(); // accessToken 만들기
        String refreshToken = tokenDto.getRefreshToken(); // refreshToken 만들기
        String secretRefreshToken = aes128Config.encryptAes(refreshToken); // refreshToken 암호화

        tokenProvider.accessTokenSetHeader(accessToken,response); // AccessToken Header response 생성
        tokenProvider.refreshTokenSetHeader(secretRefreshToken,response); // RefreshToken Header response 생성
        // tokenProvider.refreshTokenSetCookie(refreshToken,response); // RefreshToken Cookie로 설정
        Member findMember = memberService.findVerifiedMember(authMember.getId());

        Responder.loginSuccessResponse(response,findMember); // login 완료시 Response 응답 만들기

        // 로그인 성공시 Refresh Token Redis 저장 ( key = Refresh Token / value = Access Token )
        int refreshTokenExpirationMinutes = tokenProvider.getRefreshTokenExpirationMinutes();
        redisDao.setValues(refreshToken,accessToken, Duration.ofMinutes(refreshTokenExpirationMinutes));

        this.getSuccessHandler().onAuthenticationSuccess(request,response,authResult);
    }
}
