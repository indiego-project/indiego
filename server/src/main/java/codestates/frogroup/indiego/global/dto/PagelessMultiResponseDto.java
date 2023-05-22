package codestates.frogroup.indiego.global.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PagelessMultiResponseDto<T> {
    private List<T> data;
}
