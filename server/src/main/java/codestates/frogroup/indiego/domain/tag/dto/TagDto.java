package codestates.frogroup.indiego.domain.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

public class TagDto {

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class Post {

        @NotNull
        private String name;

        @NotNull
        private String type;
    }

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class Response {

        private Long tagId;
        private String name;
        private String type;

    }
}
