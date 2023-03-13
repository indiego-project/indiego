package codestates.frogroup.indiego.domain.show.entity;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShowReservation extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member; //예약한 멤버

    @Setter
    @ManyToOne
    @JoinColumn(name = "show_id")
    private Show show;

    @Column
    @Setter
    private LocalDate date;

    @Column
    private Integer ticketCount;

    @Builder
    public ShowReservation(Integer ticketCount) {
        this.ticketCount = ticketCount;
    }
}
