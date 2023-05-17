package codestates.frogroup.indiego.domain.member.entity;

import codestates.frogroup.indiego.domain.admin.Certification;
import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.payment.entity.Payment;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Member extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, unique = true, updatable = false, nullable = false)
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    @Embedded
    @Setter
    private Profile profile;

    @Embedded
    private Coordinate coordinate;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Setter
    @Enumerated(value = EnumType.STRING)
    private OAuthStatus oAuthStatus;

    @OneToMany(mappedBy = "member")
    private List<Payment> payments = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "certification_id")
    private Certification certification;

    public void setCertification(Certification certification){
        this.certification = certification;
    }

    public enum OAuthStatus {
        NORMAL("일반"),
        OAUTH("소셜");

        @Getter
        private String status;

        OAuthStatus(String status) {
            this.status = status;
        }
    }

    @Builder
    public Member(Long id, String email, String password, Profile profile, String roles,
                  Coordinate coordinate){
        this.id = id;
        this.email = email;
        this.password = password;
        this.profile = profile;
        this.roles.add(roles);
        this.coordinate = coordinate;
    }

    public Member(Long id, String email, String password, Profile profile, List<String> roles, OAuthStatus status){
        this.id = id;
        this.email = email;
        this.password = password;
        this.profile = profile;
        this.roles = roles;
        this.oAuthStatus = status;
    }

    public void setPassword(String encryptedPassword){
        this.password = encryptedPassword;
    }

    public void setCoordinate(Coordinate coordinate){
        this.coordinate = coordinate;
    }

    public void setRoles(List<String> roles){
        this.roles = roles;
    }

    public Member oauthUpdate(String name, String email, String image, List<String> roles, OAuthStatus oAuthStatus) {
        this.email = email;
        this.profile.setNickname(name);
        this.profile.setImage(image);
        this.roles = roles;
        this.oAuthStatus = oAuthStatus;
        return this;
    }

}
