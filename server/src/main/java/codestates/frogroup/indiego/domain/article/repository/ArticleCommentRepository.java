package codestates.frogroup.indiego.domain.article.repository;

import codestates.frogroup.indiego.domain.article.entity.ArticleComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleCommentRepository extends JpaRepository<ArticleComment,Long> {


}
