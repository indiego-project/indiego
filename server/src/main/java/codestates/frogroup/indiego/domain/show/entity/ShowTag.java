package codestates.frogroup.indiego.domain.show.entity;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.tag.dto.TagDto;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ShowTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    @ManyToOne
    @JoinColumn(name = "show_id")
    private Show show;

    public void updateTag(Tag tag) {
        this.tag = tag;
    }

    public void updateShow(Show show) {
        this.show = show;
    }

    public TagDto.Response toResponseDto() {
        return new TagDto.Response(
                this.getTag().getId(),
                this.getTag().getName(),
                this.getTag().getType(),
                this.getTag().getBackgroundColor(),
                this.getTag().getTextColor()
        );
    }
}
