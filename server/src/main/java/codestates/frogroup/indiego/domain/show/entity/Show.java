package codestates.frogroup.indiego.domain.show.entity;

import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Shows")
public class Show extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    @Setter
    private Member member;

    @Embedded
    @Setter
    private ShowBoard showBoard;

    @Setter
    @Embedded
    private Coordinate coordinate;


    @Enumerated(value = EnumType.STRING)
    private ShowStatus status = ShowStatus.SALE;

    @Column(nullable = false)
    @ColumnDefault("0")
    private double scoreAverage; // 평균별점

    @Column(nullable = false)
    private int total; // 정원

    @OneToMany(mappedBy = "show", cascade = CascadeType.ALL , orphanRemoval = true)
    private List<ShowTag> showTags = new ArrayList<>();

    public enum ShowStatus {
        SALE("SALE"),
        SOLD_OUT("SOLD_OUT"),
        EXPIRED("EXPIRED");

        @Getter
        private String status;

        ShowStatus(String status){
            this.status = status;
        }
    }

    public void changeShow(ShowDto.Patch patch) {
        Optional.ofNullable(patch.getTitle()).ifPresent(title -> this.showBoard.getBoard().setTitle(title));
        Optional.ofNullable(patch.getContent()).ifPresent(content -> this.showBoard.getBoard().setContent(content));
        Optional.ofNullable(patch.getImage()).ifPresent(image -> this.showBoard.getBoard().setImage(image));
        Optional.ofNullable(patch.getCategory()).ifPresent(category -> this.showBoard.getBoard().setCategory(category));
        Optional.ofNullable(patch.getPrice()).ifPresent(price -> this.showBoard.setPrice(price));
        Optional.ofNullable(patch.getAddress()).ifPresent(address -> this.showBoard.setAddress(address));
        Optional.ofNullable(patch.getDetailAddress()).ifPresent(detailAddress -> this.showBoard.setDetailAddress(detailAddress));
        Optional.ofNullable(patch.getExpiredAt()).ifPresent(expiredAt -> this.showBoard.setExpiredAt(expiredAt));
        Optional.ofNullable(patch.getShowAt()).ifPresent(showAt -> this.showBoard.setShowAt(showAt));
        Optional.ofNullable(patch.getShowTime()).ifPresent(showTime -> this.showBoard.setShowTime(showTime));
        Optional.ofNullable(patch.getDetailDescription()).ifPresent(detailDescription -> this.showBoard.setDetailDescription(detailDescription));
        Optional.ofNullable(patch.getLatitude()).ifPresent(latitude -> this.coordinate.setLatitude(latitude));
        Optional.ofNullable(patch.getLongitude()).ifPresent(longitude -> this.coordinate.setLongitude(longitude));
        Optional.ofNullable(patch.getTotal()).ifPresent(total -> this.total = total);
    }

}
