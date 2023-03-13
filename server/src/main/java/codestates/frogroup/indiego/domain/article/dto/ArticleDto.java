package codestates.frogroup.indiego.domain.article.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class ArticleDto {

    @Getter
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "제목 입력은 필수입니다.")
        private String title;

        @NotBlank(message = "본문 입력은 필수입니다.")
        private String content;

        private String image;

        @NotBlank
        private String category;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private String title;

        private String content;

        private String image;

        private String category;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {

        private Long id;

        private Long memberId;

        private String nickname;

        private String title;

        private String content;

        private String image;

        private String category;

        private long view;

        private long likeCount;

        private Boolean likeStatus;

        private LocalDateTime createdAt;

        private LocalDateTime modifiedAt;

        private Integer articleCommentCount;

        private List<ArticleCommentDto.Response> articleComments;
    }

}
