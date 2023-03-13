package codestates.frogroup.indiego.domain.article.repository;

import codestates.frogroup.indiego.domain.article.entity.ArticleLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleLikeRepository extends JpaRepository<ArticleLike, Long> {

    List<ArticleLike> findAllByArticleId(Long articleId);

    ArticleLike findByMemberIdAndArticleId(Long memberId, Long articleId);

    long countByArticleId(long articleId);
}
