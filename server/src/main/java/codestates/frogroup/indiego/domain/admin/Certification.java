package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Certification extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Enumerated(value = EnumType.STRING)
    @Column(length = 30, nullable = false)
    private CertificationStatus certificationStatus;

    @Column
    private String message;

    @OneToOne(mappedBy = "certification", fetch = FetchType.LAZY)
    private Member member;


    public void setMember(Member member){
        this.member = member;
        member.setCertification(this);
    }
    public void setMessage(String message){this.message = message;}

    @Getter
    public enum CertificationStatus{
        CERTIFICATION_ASKED("요청됨"),
        CERTIFICATION_ALLOWED("허락됨"),
        CERTIFICATION_DENIED("거절됨");
        @Getter
        private String status;

        CertificationStatus(String status) {
            this.status = status;
        }
    }

    public Certification setCertificationStatus(CertificationStatus certificationStatus) {
        this.certificationStatus = certificationStatus;
        return this;
    }
}