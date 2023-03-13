package codestates.frogroup.indiego.domain.show.entity;

import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

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

    public enum ShowStatus {
        SALE("판매중"),
        SOLD_OUT("매진"),
        EXPIRED("기간만료");

        @Getter
        private String status;

        ShowStatus(String status){
            this.status = status;
        }
    }

    // 박성호가 수정한 부분
//    @Builder
//    public Show(Long id) {
//        this.id = id;
//    }

}
