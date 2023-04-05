package codestates.frogroup.indiego.domain.show.dto;

import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.tag.dto.TagDto;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class ShowListDto {
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
    private List<TagDto.Response> tags;

    public ShowListDto(Show show) {
        this.id = show.getId();
        this.nickname = show.getMember().getProfile().getNickname();
        this.detailAddress = show.getShowBoard().getDetailAddress();
        this.title = show.getShowBoard().getBoard().getTitle();
        this.image = show.getMember().getProfile().getImage();
        this.scoreAverage = show.getScoreAverage();
        this.category = show.getShowBoard().getBoard().getCategory();
        this.expiredAt = show.getShowBoard().getExpiredAt();
        this.showAt = show.getShowBoard().getShowAt();
        this.price = show.getShowBoard().getPrice();
        this.tags = show.getShowTags().stream().map(ShowTag::toResponseDto).collect(Collectors.toList());
    }

}
