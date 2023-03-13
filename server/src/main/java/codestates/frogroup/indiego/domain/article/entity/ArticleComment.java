package codestates.frogroup.indiego.domain.article.entity;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class ArticleComment extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;

    @Column(nullable = false)
    private String comment;

    @Column(nullable = false)
    @ColumnDefault("0")
    private long likeCount;

    @OneToMany(mappedBy = "articleComment", cascade = CascadeType.ALL)
    private List<ArticleCommentLike> articleCommentLikes = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    @Builder
    public ArticleComment(Member member, Article article, String comment) {
        this.member = member;
        this.article = article;
        this.comment = comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }


    public void setLikeCount(long likeCount) {
        this.likeCount = likeCount;
    }
}
