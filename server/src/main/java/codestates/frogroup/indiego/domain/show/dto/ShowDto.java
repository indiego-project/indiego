package codestates.frogroup.indiego.domain.show.dto;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowBoard;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.tag.dto.TagDto;
import com.querydsl.core.annotations.QueryProjection;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;


public class ShowDto {

    @Getter
    @AllArgsConstructor
    @Setter
    @Builder
    public static class Post{
        //ShowBoard
        //Board
        @NotNull
        private String title;
        @NotNull
        private String content;
        private String image;
        @NotNull
        private String category;
        //board end
        @NotNull
        private Integer price;
        @NotNull
        private String address;
        @NotNull
        private String detailAddress;
        @NotNull
        private LocalDate expiredAt; // 만료날짜
        @NotNull
        private LocalDate showAt; // 공연날짜
        @NotNull
        private String showTime;
        private String detailDescription;
        //showboard end
        @NotNull
        private Double latitude;
        @NotNull
        private Double longitude;

        @NotNull
        private Integer total; // 정원
        @NotNull
        private List<String> tags;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Patch{
        private Long id;
        //ShowBoard
        //Board
        private String title;
        private String content;
        private String image;
        private String category;
        //board end
        private Integer price;
        private String address;
        private String detailAddress;
        private LocalDate expiredAt; // 만료날짜
        private LocalDate showAt; // 공연날짜
        private String showTime;
        private String detailDescription;
        //showboard end
        private Double latitude;
        private Double longitude;

        private Integer total; // 정원

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response{
        private Long id;
        private Long sellerId;
        //ShowBoard
        //Board
        private String title;
        private String content;
        private String image;
        private String category;
        //board end
        private Integer price;
        private String address;
        private String detailAddress;
        private LocalDate expiredAt; // 만료날짜
        private LocalDate showAt; // 공연날짜
        private String showTime;
        private String detailDescription;
        //showboard end
        private Double latitude;
        private Double longitude;

        //check
        private String status;
        private Double scoreAverage; // 평균별점
        private Integer total; // 정원

        private Integer emptySeats;
        private boolean isBookmarked;
        private String nickname;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class postResponse{
        private Long id;
        //ShowBoard
        //Board
        private String title;
        private String content;
        private String image;
        private String category;
        //board end
        private Integer price;
        private String address;
        private String detailAddress;
        private LocalDate expiredAt; // 만료날짜
        private LocalDate showAt; // 공연날짜
        private String showTime;
        private String detailDescription;
        //showboard end
        private Double latitude;
        private Double longitude;

        //check
        private String status;
        private Double scoreAverage; // 평균별점
        private Integer total; // 정원
        private List<TagDto.Response> tags;

        @Builder
        public postResponse (Show show) {
            this.id = show.getId();
            this.title = show.getShowBoard().getBoard().getTitle();
            this.content = show.getShowBoard().getBoard().getContent();
            this.image = show.getShowBoard().getBoard().getImage();
            this.category = show.getShowBoard().getBoard().getCategory();
            this.price = show.getShowBoard().getPrice();
            this.address = show.getShowBoard().getAddress();
            this.detailAddress = show.getShowBoard().getDetailAddress();
            this.expiredAt = show.getShowBoard().getExpiredAt();
            this.showAt = show.getShowBoard().getShowAt();
            this.showTime = show.getShowBoard().getShowTime();
            this.detailDescription = show.getShowBoard().getDetailDescription();
            this.latitude = show.getCoordinate().getLatitude();
            this.longitude = show.getCoordinate().getLongitude();
            this.status = show.getStatus().getStatus();
            this.scoreAverage = show.getScoreAverage();
            this.total = show.getTotal();
            this.tags = show.getShowTags().stream().map(ShowTag::toResponseDto).collect(Collectors.toList());
        }

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class LocationResponse {
        private int total;
        private List<ShowsResponse> shows;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ShowsResponse {
        private Long id;
        private String nickname;
        private String title;
        private String content;
        private String image;
        private String expiredAt;
        private String showAt;
        private String detailAddress;

        @Builder
        ShowsResponse(Long id, ShowBoard showBoard, Member member){
            this.id = id;
            this.nickname = member.getProfile().getNickname();
            this.title = showBoard.getBoard().getTitle();
            this.content = showBoard.getBoard().getContent();
            this.image = showBoard.getBoard().getImage();
            this.expiredAt = showBoard.getExpiredAt().toString();
            this.showAt = showBoard.getShowAt().toString();
        }
    }

    @Data
    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class showListToShowListResponseOfSeller{
        private Long id;
        private String title;
        private String nickname;
        private LocalDate showAt;
        private LocalDate expiredAt;
        private String address;
        private String detailAddress;
        private String image;
        @Setter
        private Integer emptySeats;
        @Setter
        private Integer revenue;
        @Setter
        private boolean isExpired;

        @QueryProjection
        @Builder
        public showListToShowListResponseOfSeller(Long id, String title, String nickname,
                                                  LocalDate showAt, LocalDate expiredAt, String address, String detailAddress, String image) {
            this.id = id;
            this.title = title;
            this.nickname = nickname;
            this.showAt = showAt;
            this.expiredAt = expiredAt;
            this.address = address;
            this.detailAddress = detailAddress;
            this.image = image;
        }
    }

}
