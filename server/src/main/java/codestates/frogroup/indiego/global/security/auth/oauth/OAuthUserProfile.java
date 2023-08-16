package codestates.frogroup.indiego.global.security.auth.oauth;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.entity.Profile;
import lombok.Getter;

import java.util.List;

import static codestates.frogroup.indiego.domain.member.entity.Member.*;

@Getter
public class OAuthUserProfile {
    private final String name;
    private final String email;
    private final String image;
    private final String oauthId;

    public OAuthUserProfile(String name, String email, String image, String oauthId) {
        this.name = name;
        this.email = email;
        this.image = image;
        this.oauthId = oauthId;
    }

    public Member createOauth2Member(String name, String email, String image, List<String> roles, OAuthStatus status) {
        Profile profile = new Profile();
        profile.setNickname(name);
        profile.setImage(image);
        return new Member(null, email, oauthId, profile, roles, status);
    }
}
