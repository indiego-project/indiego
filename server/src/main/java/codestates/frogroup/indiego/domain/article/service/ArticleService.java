package codestates.frogroup.indiego.domain.article.service;

import codestates.frogroup.indiego.domain.article.dto.ArticleListResponseDto;
import codestates.frogroup.indiego.domain.article.entity.Article;
import codestates.frogroup.indiego.domain.article.entity.ArticleLike;
import codestates.frogroup.indiego.domain.article.dto.ArticleDto;
import codestates.frogroup.indiego.domain.article.mapper.ArticleMapper;
import codestates.frogroup.indiego.domain.article.repository.ArticleLikeRepository;
import codestates.frogroup.indiego.domain.article.repository.ArticleRepository;
import codestates.frogroup.indiego.domain.common.utils.CustomBeanUtils;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.fileupload.AwsS3Path;
import codestates.frogroup.indiego.global.fileupload.AwsS3Service;
import codestates.frogroup.indiego.global.redis.RedisKey;
import codestates.frogroup.indiego.global.security.auth.userdetails.AuthMember;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final ArticleLikeRepository articleLikeRepository;
    private final ArticleMapper mapper;
    private final MemberService memberService;
    private final AwsS3Service awsS3Service;
    private final CustomBeanUtils<Article> beanUtils;
    private final RedisKey redisKey;

    /**
     * 게시글 작성
     */
    @Transactional
    public ArticleDto.Response createArticle(Article article, Long memberId) {

        Member member = memberService.findVerifiedMember(memberId);

        article.setMember(member);

        Article savedArticle = articleRepository.save(article);

        return mapper.articleToArticleResponse(savedArticle);
    }

    /**
     * 게시글 수정
     */
    @Transactional
    public ArticleDto.Response updateArticle(Article article, Long articleId, Long memberId) {

        Article findArticle = findVerifiedArticle(articleId);

        if (findArticle.getMember().getId().equals(memberId)) {

//            changeArticle(article, findArticle);
            Article updateArticle = beanUtils.copyNonNullProperties(article, findArticle);
            updateArticle.setLikeCount(articleLikeRepository.countByArticleId(findArticle.getId()));
            Article savedArticle = articleRepository.save(updateArticle);

            return mapper.articleToArticleResponse(savedArticle);
        }

        throw new BusinessLogicException(ExceptionCode.MEMBER_NO_PERMISSION);
    }

    /**
     * 게시글 전체 조회
     */
    public Page<ArticleListResponseDto> findArticles(String category, String search, String status, Pageable pageable) {

        pageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize());

        if (Objects.isNull(category) && Objects.isNull(search)) {
            return articleRepository.findAllBasic(status, pageable);
        }

        return articleRepository.findAllSearch(category, search, status, pageable);
    }

    public List<ArticleListResponseDto> findPopularArticles(String category) {

        if (Objects.isNull(category)) {
            throw new BusinessLogicException(ExceptionCode.ARTICLE_GET_BAD_REQUEST);
        }

        return articleRepository.findLikeCountDesc(category);
    }

    /**
     * 게시글 단일 조회
     * TODO: 게시글 조회는 읽기만 하고 조회수를 증가시키는 방법은 없을까?
     */
    //    @Transactional // TODO: @Transactional 조금 더 알아보기
    public ArticleDto.Response findArticle(Long articleId, Member member) {

        Article findArticle = findVerifiedArticle(articleId);

        Long viewCount = articleRepository.findViewCountFromRedis(articleId);
        log.info("viewCount1={}", viewCount);
        if (viewCount == null) {
            viewCount = articleRepository.findView(articleId);
            log.info("viewCount2={}", viewCount);
            articleRepository.saveViewCountToRedis(articleId, viewCount);
        }

        // redis의 조회수 증가
//        viewCount = articleRepository.incrementViewCount(articleId);
//        log.info("viewCount3={}", viewCount);

        ArticleDto.Response response = getResponse(findArticle, member);

        response.setView(viewCount);

        return response;
    }

    public Long incrementViewCount(Long articleId) {
        return articleRepository.incrementViewCount(articleId);
    }

//    @Transactional // TODO: @Transactional 조금 더 알아보기
//    public ArticleDto.Response findArticle(Long articleId, HttpServletRequest request) {
//
//        Article findArticle = findVerifiedArticle(articleId);
//
//        Long viewCount = articleRepository.findViewCountFromRedis(articleId);
//        log.info("viewCount1={}", viewCount);
//
//        if (viewCount == null) {
//            viewCount = articleRepository.findView(articleId);
//            log.info("viewCount2={}", viewCount);
//            articleRepository.saveViewCountToRedis(articleId, viewCount);
//        }
//
//        HttpSession session = request.getSession();
//        ArticleDto.Response response = getResponse(findArticle);
//
//        // 조회한 적이 없는 경우
//        if (session.getAttribute("articleId:" + articleId) == null) {
//            viewCount = articleRepository.incrementViewCount(articleId);
//            response.setView(viewCount);
//
//            session.setAttribute("articleId:" + articleId, true);
//
//            return response;
//        }
//
//        // 조회한 적이 있는 경우
//        viewCount = articleRepository.findViewCountFromRedis(articleId);
//        response.setView(viewCount);
//
//        return response;
//    }

    /**
     * 게시글 삭제
     */
    @Transactional
    public void deleteArticle(Long articleId, Long memberId) {
        Long findMemberId = findVerifiedArticle(articleId).getMember().getId();

        if (findMemberId.equals(memberId)) {
            articleRepository.delete(findVerifiedArticle(articleId));

            String redisKey = this.redisKey.getArticleViewKey(articleId);
            articleRepository.deleteValues(redisKey);

        } else {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_PERMISSION);
        }

    }

    /**
     * 게시글 좋아요
     */
    @Transactional
    public HttpStatus articleLike(Long articleId, Long memberId) {
        Article findArticle = findVerifiedArticle(articleId);
        Member findMember = memberService.findVerifiedMember(memberId);

        ArticleLike findArticleLike = articleLikeRepository.findByMemberIdAndArticleId(memberId, articleId);

        return findArticleLike == null ? createArticleLike(findArticle, findMember) : deleteArticleLike(findArticleLike);
    }

    /**
     * 게시글 이미지 업로드
     */
    @Transactional
    public String uploadArticleImage(MultipartFile file, Long memberId) {
        memberService.findVerifiedMember(memberId);

        return awsS3Service.StoreImage(file, AwsS3Path.ARTICLES);
    }

    /**
     * Response 처리 메서드
     */
    private ArticleDto.Response getResponse(Article article, Member member) {

        ArticleDto.Response response = mapper.articleToArticleResponse(article);
//        long likeCount = articleLikeRepository.countByArticleId(article.getId());
//        response.setLikeCount(likeCount);

        if (member == null) {
            response.setLikeStatus(false);
        } else {
            ArticleLike articleLike = articleLikeRepository.findByMemberIdAndArticleId(member.getId(), article.getId());
            response.setLikeStatus(articleLike != null);
        }

//        if (member == null) {
//            response.setLikeStatus(false);
//        } else {
//            ArticleLike articleLike =
//                    articleLikeRepository.findByMemberIdAndArticleId(member.getId(), article.getId());
//            if (articleLike == null) {
//                response.setLikeStatus(false);
//            } else {
//                response.setLikeStatus(true);
//            }
//        }

        return response;
    }

    /**
     * 게시글 조회 검증
     */
    private Article findVerifiedArticle(Long articleId) {

        return articleRepository.findById(articleId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));
    }

    /**
     * 좋아요
     */
    private HttpStatus createArticleLike(Article findArticle, Member findMember) {

        articleLikeRepository.save(
                ArticleLike.builder()
                        .article(findArticle)
                        .member(findMember)
                        .build());

        findArticle.setLikeCount(articleLikeRepository.countByArticleId(findArticle.getId()));
        articleRepository.save(findArticle);

        return HttpStatus.CREATED;
    }

    /**
     * 좋아요 취소
     */
    private HttpStatus deleteArticleLike(ArticleLike findArticleLike) {
        Article article = findArticleLike.getArticle();
        articleLikeRepository.delete(findArticleLike);

        article.setLikeCount(articleLikeRepository.countByArticleId(article.getId()));
        articleRepository.save(article);

        return HttpStatus.NO_CONTENT;
    }

    /**
     * 조회수 증가
     */
    @Transactional
    public void updateView(Long articleId) {
        findVerifiedArticle(articleId).updateView();
    }

    /**
     * 게시글 수정 메서드
     */
    private static void changeArticle(Article article, Article findArticle) {

        Optional.ofNullable(article.getBoard().getTitle())
                .ifPresent(title -> findArticle.getBoard().setTitle(title));

        Optional.ofNullable(article.getBoard().getContent())
                .ifPresent(content -> findArticle.getBoard().setContent(content));

        Optional.ofNullable(article.getBoard().getImage())
                .ifPresent(image -> findArticle.getBoard().setImage(image));

        Optional.ofNullable(article.getBoard().getCategory())
                .ifPresent(category -> findArticle.getBoard().setCategory(category));

    }

}
