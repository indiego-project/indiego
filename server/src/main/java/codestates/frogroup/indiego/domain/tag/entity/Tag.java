package codestates.frogroup.indiego.domain.tag.entity;

import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, unique = true, nullable = false)
    private String name;

    @Column(length = 100, nullable = false)
    private String type;

    @Column(length = 100, nullable = false)
    private String backgroundColor;

    @Column(length = 100, nullable = false)
    private String textColor;

    @OneToMany(mappedBy = "tag")
    private List<ShowTag> showTags = new ArrayList<>();

}
