package codestates.frogroup.indiego.domain.article.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class ArticleCommentDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {

        @NotBlank
        private String comment;

    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {

        private String comment;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {

        private Long id;

        private Long memberId;

        private Long articleId;

        private String nickname;

        private String image;

        private String comment;

        private long likeCount;

        private LocalDateTime createdAt;

    }
}
