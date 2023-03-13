package codestates.frogroup.indiego.domain.article.repository;

import codestates.frogroup.indiego.domain.article.entity.ArticleCommentLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleCommentLikeRepository extends JpaRepository<ArticleCommentLike, Long> {

    List<ArticleCommentLike> findAllByArticleCommentId(Long commentId);

    ArticleCommentLike findByMemberIdAndArticleCommentId(Long memberId, Long articleCommentId);

}
