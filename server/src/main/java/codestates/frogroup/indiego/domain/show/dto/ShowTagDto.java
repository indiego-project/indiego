package codestates.frogroup.indiego.domain.show.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

public class ShowTagDto {

    @Getter
    @AllArgsConstructor
    public static class Request {
        @NotNull
        private Long tagId;
        @NotNull
        private Long showId;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long showTagId;
        private Long tagId;
        private Long showId;
    }

}
