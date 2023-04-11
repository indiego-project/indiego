package codestates.frogroup.indiego.domain.article.entity;

import codestates.frogroup.indiego.domain.common.embedding.Board;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@DynamicInsert
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Where(clause = "deleted = false")
public class Article extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Embedded
    private Board board;

    @Column(nullable = false)
    @ColumnDefault("0")
    private long view;

    @Column(nullable = false)
    @ColumnDefault("0")
    private long likeCount;

    @Column(nullable = false)
    @ColumnDefault("0")
    private long articleCommentCount;

    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL)
    private List<ArticleComment> articleComments = new ArrayList<>();

    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL)
    private List<ArticleLike> articleLikes = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public void setView(long view) {
        this.view = view;
    }

    public void setLikeCount(long likeCount) {
        this.likeCount = likeCount;
    }

    public void setArticleCommentCount(long articleCommentCount) {
        this.articleCommentCount = articleCommentCount;
    }

    public void updateView() {
        this.view++;
    }
}
