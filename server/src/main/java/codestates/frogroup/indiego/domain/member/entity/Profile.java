package codestates.frogroup.indiego.domain.member.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Getter
@Setter
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

    @Column(length = 50, nullable = false)
    private String nickname;

    @Column(length = 100)
    private String address;

    @Column(nullable = false)
    private String image;

    @Column(columnDefinition = "TEXT")
    private String introduction;

}
