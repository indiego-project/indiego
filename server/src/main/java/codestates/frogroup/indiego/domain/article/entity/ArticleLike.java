package codestates.frogroup.indiego.domain.article.entity;

import codestates.frogroup.indiego.domain.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ArticleLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;

    @Builder
    public ArticleLike(Member member, Article article) {
        this.member = member;
        this.article = article;
    }
}
