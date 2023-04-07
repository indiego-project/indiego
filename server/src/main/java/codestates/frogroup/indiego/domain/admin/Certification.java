package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Certification extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setMember(Member member){
        this.member = member;
    }
}
