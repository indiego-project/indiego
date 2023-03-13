package codestates.frogroup.indiego.global.security.auth.oauth;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;

public enum OAuthAttributes {
    GOOGLE("google", (attributes) -> {
        return new OAuthUserProfile(
                (String) attributes.get("name"),
                (String) attributes.get("email"),
                (String) attributes.get("picture"),
                String.valueOf(attributes.get("sub"))
        );
    }),
    NAVER("naver", (attributes) -> {
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");
        return new OAuthUserProfile(
                (String) response.get("name"),
                (String) response.get("email"),
                (String) response.get("profile_image"),
                String.valueOf(response.get("id"))
        );
    }),
    KAKAO("kakao", (attributes) -> {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) kakaoAccount.get("profile"); // 이미지 profile_image_url
        return new OAuthUserProfile(
                (String) profile.get("nickname"),
                (String) kakaoAccount.get("email"),
                (String) profile.get("profile_image_url"),
                String.valueOf(attributes.get("id"))
        );
    });

    private final String registrationId;
    private final Function<Map<String, Object>, OAuthUserProfile> of;

    OAuthAttributes(String registrationId, Function<Map<String, Object>, OAuthUserProfile> of) {
        this.registrationId = registrationId;
        this.of = of;
    }

    public static OAuthUserProfile extract(String registrationId, Map<String, Object> attributes) {
        return Arrays.stream(values())
                .filter(provider -> registrationId.equals(provider.registrationId))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new)
                .of.apply(attributes);
    }
}
