package codestates.frogroup.indiego.domain.member.dto;

import codestates.frogroup.indiego.domain.member.entity.Profile;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        @Email
        private String email;
        @Pattern(message = "'숫자', '문자' 무조건 1개 이상, '최소 8자에서 최대 20자' 허용, !@#$%^&* 특수문자만 허용",
                regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d~!@#$%^&*()+|=]{8,20}$")
        private String password;
        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String nickname;
        @NotBlank(message = "권한은 공백이 아니어야 합니다.")
        private String role;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {

        private String nickname;
        private String address;
        private String image;
        private String introduction;
        private Double latitude;
        private Double longitude;

    }

    @Getter
    @AllArgsConstructor
    public static class GetResponse {
        private Long id;
        private String email;
        private String role;
        private List<Profile> profile;
        private Double latitude;
        private Double longitude;

        private Long certiId;

        @Builder
        public GetResponse(Long id, String email, List<String> role, Profile profile,
                           Double latitude, Double longitude, Long certiId) {
            this.id = id;
            this.email = email;
            this.role = role.get(0);
            this.profile = List.of(profile);
            this.latitude = latitude;
            this.longitude = longitude;
            this.certiId = certiId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class PostResponse {
        private Long id;
        private String email;
        private String nickname;
        private String role;

        @Builder
        public PostResponse(Long id, String email, String nickname, List<String> role) {
            this.id = id;
            this.email = email;
            this.nickname = nickname;
            this.role = role.get(0);
        }
    }

    @Getter
    @AllArgsConstructor
    public static class PatchResponse {
        private String nickname;
        private String address;
        private String image;
        private String introduction;
        private Double latitude;
        private Double longitude;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class LoginResponse {
        private Long id;
        private String email;
        private String nickname;
        private String role;
    }

}
