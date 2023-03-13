package codestates.frogroup.indiego.domain.show.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ShowListResponseDto {
    private Long id;
    private String nickname;
    private String detailAddress;
    private String title;
    private String image;
    private double scoreAverage;
    private String category;
    private LocalDate expiredAt; // 만료날짜
    private LocalDate showAt; // 공연날짜
    private Integer price;

    @QueryProjection
    public ShowListResponseDto(Long id, String nickname, String detailAddress, String title, String image,
                               double scoreAverage, String category, LocalDate expiredAt, LocalDate showAt, Integer price) {
        this.id = id;
        this.nickname = nickname;
        this.detailAddress = detailAddress;
        this.title = title;
        this.image = image;
        this.scoreAverage = scoreAverage;
        this.category = category;
        this.expiredAt = expiredAt;
        this.showAt = showAt;
        this.price = price;
    }
}
