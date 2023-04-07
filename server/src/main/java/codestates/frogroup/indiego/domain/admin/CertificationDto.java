package codestates.frogroup.indiego.domain.admin;

import lombok.AllArgsConstructor;
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

    @Setter
    @AllArgsConstructor
    public static class Response{
        String message;
    }
}

