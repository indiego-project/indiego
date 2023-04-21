package codestates.frogroup.indiego.domain.article.repository;

import codestates.frogroup.indiego.domain.article.dto.ArticleCommentDto;
import codestates.frogroup.indiego.domain.article.entity.ArticleComment;
import codestates.frogroup.indiego.global.redis.RedisDao;
import io.lettuce.core.dynamic.annotation.Param;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Filter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface ArticleCommentRepository extends JpaRepository<ArticleComment,Long> {
    @Query(value = "SELECT * FROM article_comment  WHERE deleted_at IS NOT NULL",nativeQuery = true)
    Page<ArticleComment> findSoftDeletedArticleComment(Pageable pageable);

    @Query(value = "SELECT * FROM article_comment WHERE id = :commentId AND deleted_at IS NOT NULL" ,nativeQuery = true)
    Optional<ArticleComment> findSoftDeletedArticleCommentById(@Param("commentId")Long commentId);

    @Modifying
    @Query(value ="DELETE * FROM ArticleComment  WHERE deleted_at IS NOT NULL AND DATEDIFF(NOW(), deleted_at) >= 30" ,nativeQuery = true)
    void deleteSoftDeletedAll();
}
