package codestates.frogroup.indiego.domain.article.controller;

import codestates.frogroup.indiego.domain.article.dto.ArticleCommentDto;
import codestates.frogroup.indiego.domain.article.service.ArticleCommentService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Slf4j
@RestController
@RequestMapping("/articles/{article-id}/comments")
@RequiredArgsConstructor
public class ArticleCommentController {

    private final ArticleCommentService articleCommentService;

    /**
     * 댓글 작성
     */
    @PostMapping
    public ResponseEntity postArticleComment(@Positive @PathVariable("article-id") Long articleId,
                                             @LoginMemberId Long memberId,
                                             @Valid @RequestBody ArticleCommentDto.Post articleCommentPostDto) {


        ArticleCommentDto.Response response =
                articleCommentService.createArticleComment(articleId, memberId, articleCommentPostDto);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    /**
     * 댓글 수정
     */
    @PatchMapping("/{comment-id}")
    public ResponseEntity patchArticleComment(@Positive @PathVariable("article-id") Long articleId,
                                              @Positive @PathVariable("comment-id") Long commentId,
                                              @LoginMemberId Long memberId,
                                              @Valid @RequestBody ArticleCommentDto.Patch articleCommentPatchDto) {


        ArticleCommentDto.Response response =
                articleCommentService.updateArticleComment(articleId, commentId, memberId, articleCommentPatchDto);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    /**
     * 댓글 삭제
     */
    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteArticleComment(@Positive @PathVariable("article-id") Long articleId,
                                               @Positive @PathVariable("comment-id") Long commentId,
                                               @LoginMemberId Long memberId) {

        articleCommentService.deleteArticleComment(articleId, commentId, memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /**
     * 댓글 좋아요
     */
    @PutMapping("/{comment-id}")
    public ResponseEntity articleCommentLike(@Positive @PathVariable("article-id") Long articleId,
                                             @Positive @PathVariable("comment-id") Long commentId,
                                             @LoginMemberId Long memberId) {


        HttpStatus response = articleCommentService.articleCommentLike(articleId, commentId, memberId);

        return new ResponseEntity<>(response);
    }
}
