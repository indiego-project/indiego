package codestates.frogroup.indiego.domain.article.repository;

import codestates.frogroup.indiego.domain.article.entity.Article;
import codestates.frogroup.indiego.domain.article.repository.querydsl.ArticleRepositoryCustom;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ArticleRepository extends JpaRepository<Article,Long>, ArticleRepositoryCustom {

    @Query("SELECT a.view FROM Article a WHERE a.id = :id")
    Long findView(@Param("id") Long id);
}
