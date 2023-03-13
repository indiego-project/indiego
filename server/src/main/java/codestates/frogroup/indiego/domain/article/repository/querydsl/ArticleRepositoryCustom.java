package codestates.frogroup.indiego.domain.article.repository.querydsl;

import codestates.frogroup.indiego.domain.article.dto.ArticleListResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ArticleRepositoryCustom {

    Page<ArticleListResponseDto> findAllBasic(String status, Pageable pageable);

    Page<ArticleListResponseDto> findAllSearch(String category, String search, String status, Pageable pageable);

    List<ArticleListResponseDto> findLikeCountDesc(String category);

    Long incrementViewCount(Long articleId);

    Long findViewCountFromRedis(Long articleId);

    void saveViewCountToRedis(Long articleId, Long viewCount);

    Long getValues(String key);

    void deleteValues(String key);
}
