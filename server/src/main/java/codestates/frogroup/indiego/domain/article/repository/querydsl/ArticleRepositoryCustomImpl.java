package codestates.frogroup.indiego.domain.article.repository.querydsl;

import codestates.frogroup.indiego.domain.article.dto.ArticleListResponseDto;
import codestates.frogroup.indiego.domain.article.dto.QArticleListResponseDto;
import codestates.frogroup.indiego.domain.article.entity.Article;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

import java.util.List;
import java.util.Objects;

import static codestates.frogroup.indiego.domain.article.entity.QArticle.article;
import static org.springframework.util.StringUtils.hasText;

@Repository
public class ArticleRepositoryCustomImpl extends QuerydslRepositorySupport implements ArticleRepositoryCustom {

    private final String VIEW_COUNT_KEY = "%s:article:viewCount";
    private final JPAQueryFactory queryFactory;

    @Autowired
    private RedisTemplate<String, Long> redisTemplate;

    // Querydsl의 리포지토리 지원 받는 부분
    public ArticleRepositoryCustomImpl(EntityManager em) {
        super(Article.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Long incrementViewCount(Long articleId) {
        return redisTemplate.opsForValue().increment(String.format(VIEW_COUNT_KEY, articleId), 1L);
    }

    @Override
    public Long findViewCountFromRedis(Long articleId) {
        return redisTemplate.opsForValue().get(String.format(VIEW_COUNT_KEY, articleId));
    }

    @Override
    public void saveViewCountToRedis(Long articleId, Long viewCount) {
        redisTemplate.opsForValue().set(String.format(VIEW_COUNT_KEY, articleId), viewCount);
    }

    @Override
    public Long getValues(String key) {
        ValueOperations<String, Long> values = redisTemplate.opsForValue();
        return values.get(key);
    }

    public void deleteValues(String key) {
        redisTemplate.delete(key);
    }

    @Override
    public Page<ArticleListResponseDto> findAllBasic(String status, Pageable pageable) {

        List<ArticleListResponseDto> content = queryFactory
                .select(new QArticleListResponseDto(
                        article.id,
                        article.member.profile.nickname,
                        article.board.title,
                        article.board.content,
                        article.board.category,
                        article.board.image,
                        article.likeCount,
                        article.createdAt))
                .from(article)
                .where(article.board.category.eq("자유게시판"))
                .orderBy(sortStatusEq(status))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Article> countQuery = queryFactory
                .select(article)
                .from(article)
                .where(article.board.category.eq("자유게시판"))
                .orderBy(sortStatusEq(status));

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount); // 최적화
    }

    @Override
    public Page<ArticleListResponseDto> findAllSearch(String category, String search, String status, Pageable pageable) {

        List<ArticleListResponseDto> content = queryFactory
                .select(new QArticleListResponseDto(
                        article.id,
                        article.member.profile.nickname,
                        article.board.title,
                        article.board.content,
                        article.board.category,
                        article.board.image,
                        article.likeCount,
                        article.createdAt))
                .from(article)
                .where(
                        categoryEq(category),
                        searchEq(search)
                )
                .orderBy(sortStatusEq(status))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Long> countQuery = queryFactory
                .select(article.count())
                .from(article)
                .where(
                        categoryEq(category),
                        searchEq(search)
                )
                .orderBy(sortStatusEq(status));

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount); // 최적화
    }

    @Override
    public List<ArticleListResponseDto> findLikeCountDesc(String category) {

        return queryFactory
                .select(new QArticleListResponseDto(
                        article.id,
                        article.member.profile.nickname,
                        article.board.title,
                        article.board.content,
                        article.board.category,
                        article.board.image,
                        article.likeCount,
                        article.createdAt))
                .from(article)
                .where(article.board.category.eq(category))
                .orderBy(article.likeCount.desc())
                .offset(0)
                .limit(5)
                .fetch();

    }

    private OrderSpecifier<?> sortStatusEq(String status) {

        if (Objects.isNull(status) || status.equals("최신순")) {
            return article.createdAt.desc();
        } else if (status.equals("인기순")) {
            return article.likeCount.desc();
        }

        return null;
    }

    private BooleanExpression searchEq(String search) {

        if (Objects.isNull(search)) {
            return null;
        } else {
            return article.member.profile.nickname.containsIgnoreCase(search)
                    .or(article.board.title.containsIgnoreCase(search))
                    .or(article.board.content.containsIgnoreCase(search));
        }
    }

    private BooleanExpression categoryEq(String category) {
        return hasText(category) ? article.board.category.eq(category) : article.board.category.eq("자유게시판");
    }

}
