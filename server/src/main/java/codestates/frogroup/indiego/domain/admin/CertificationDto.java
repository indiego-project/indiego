package codestates.frogroup.indiego.domain.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


public class CertificationDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        Long memberId;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        Long memberId;
    }

    @Setter @Getter
    @AllArgsConstructor @Builder
    public static class Response{
        Long id;
        Long memberId;
        String message;
        String email;

    }
}

