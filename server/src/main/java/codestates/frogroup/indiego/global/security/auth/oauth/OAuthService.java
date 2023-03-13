package codestates.frogroup.indiego.global.security.auth.oauth;

import codestates.frogroup.indiego.global.security.auth.enums.Roles;
import codestates.frogroup.indiego.global.security.auth.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class OAuthService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final CustomAuthorityUtils customAuthorityUtils;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest); // OAuth 서비스에서 가져온 유저 정보를 담고있음

        String registrationId = userRequest.getClientRegistration().getRegistrationId(); // OAuth 서비스 이름(ex. kakao, github, naver, google)

        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails()
                .getUserInfoEndpoint().getUserNameAttributeName(); // OAuth 로그인 시 키(pk)가 되는 값 (ex. reponse, id, sub)
        Map<String, Object> attributes = oAuth2User.getAttributes(); // OAuth 서비스의 유저 정보들
        OAuthUserProfile oAuthUserProfile = OAuthAttributes.extract(registrationId, attributes); // registrationId에 따라 유저 정보를 통해 공통된 UserProfile 객체로 만들어 줌

        List<String> roles = customAuthorityUtils.createRoles(Roles.USER.toString()); // OAuth2 사용자의 권한 강제 부여
        List<GrantedAuthority> authorities = customAuthorityUtils.createAuthorities(roles);

        log.info("# OAuth2.0 login information : flatform = {}, email = {}", registrationId, oAuthUserProfile.getEmail());

        return OAuthCustomUser.of(authorities, attributes, registrationId);
        //return new DefaultOAuth2User(authorities, attributes, userNameAttributeName); // 기본 구현체 사용시
    }
}