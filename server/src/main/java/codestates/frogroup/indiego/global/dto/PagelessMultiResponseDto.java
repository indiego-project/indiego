package codestates.frogroup.indiego.global.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class PagelessMultiResponseDto<T> {
    private List<T> data;
}
