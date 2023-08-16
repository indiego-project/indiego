package codestates.frogroup.indiego.domain.admin;

import lombok.*;

import java.time.LocalDateTime;

public class CertificationDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        Long memberId;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AdminPost {
        String Message;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        Long memberId;
    }

    @Setter
    @Getter
    @AllArgsConstructor
    @Builder
    @NoArgsConstructor
    public static class Response {
        Long id;
        Long memberId;
        String message;
        String email;
        Certification.CertificationStatus status;
        LocalDateTime createdAt;

    }


}

