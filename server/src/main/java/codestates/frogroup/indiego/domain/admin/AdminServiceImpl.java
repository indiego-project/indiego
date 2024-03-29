package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.article.dto.ArticleCommentDto;
import codestates.frogroup.indiego.domain.article.entity.ArticleComment;
import codestates.frogroup.indiego.domain.article.mapper.ArticleCommentMapper;
import codestates.frogroup.indiego.domain.article.repository.ArticleCommentRepository;
import codestates.frogroup.indiego.domain.article.service.ArticleCommentService;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.dto.MultiResponseDto;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.security.auth.enums.Roles;
import codestates.frogroup.indiego.global.security.auth.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final MemberService memberService;
    private final CertificationServiceImpl certificationService;
    private final CertificationMapper certificationMapper;
    private final ArticleCommentService articleCommentService;
    private final ArticleCommentRepository articleCommentRepository;
    private final ArticleCommentMapper articleCommentMapper;
    private final CustomAuthorityUtils customAuthorityUtils;

    //퍼포머 인증
    public ResponseEntity certifyPerformer(Long certiId, Long tokenMemberId, String message) {
        Certification certification= certificationService.findCertification(certiId, tokenMemberId);
        Member member = memberService.findVerifiedMember(certification.getMember().getId());
        member.setRoles(customAuthorityUtils.createRoles(Roles.PERFORMER.getRole()));
        certification.setCertificationStatus(Certification.CertificationStatus.CERTIFICATION_ALLOWED);
        certification.setMessage(message);
        this.patchCertification(certification, certiId, member.getId());
        return new ResponseEntity<>(new SingleResponseDto("퍼포머 인증됐습니다."), HttpStatus.OK);
    }

    @Override
    public ResponseEntity denyPerformer(Long certificationId, Long tokenMemberId, String message) {
        Certification certification = certificationService.findCertification(certificationId, tokenMemberId);
        certification.setCertificationStatus(Certification.CertificationStatus.CERTIFICATION_DENIED);
        certification.setMessage(message);
        Member member = memberService.findVerifiedMember(certification.getMember().getId());
        this.patchCertification(certification, certificationId, member.getId());
        return  new ResponseEntity<>(new SingleResponseDto("퍼포머 인증 거부됐습니다."), HttpStatus.OK);
    }

    @Override
    public ResponseEntity softDeleteComment(Long commentId) {
        ArticleComment comment = articleCommentService.findVerifiedArticleComment(commentId);
        comment.setDeleted(LocalDateTime.now());
        return new ResponseEntity<>(new SingleResponseDto<>("댓글이 삭제됐습니다."),HttpStatus.OK);
    }
    @Override
    public ResponseEntity restoreSofeDeletedComment(Long commentId){
        ArticleComment foundComment = articleCommentRepository.findSoftDeletedArticleCommentById(commentId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.ARTICLE_COMMENT_NOT_FOUND)
        );
        foundComment.setDeleted(null);
        return new ResponseEntity<>(new SingleResponseDto<>("댓글이 복구됐습니다."),HttpStatus.OK);
    }

    @Override
    public ResponseEntity getComments(Pageable pageable) {
        pageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), Sort.by(Sort.Direction.ASC, "createdAt"));
        Page<ArticleComment> page = articleCommentRepository.findAll(pageable);
        List<ArticleCommentDto.Response> response = articleCommentMapper.articleCommentsToArticleCommentResponses(page.getContent());
        MultiResponseDto<ArticleCommentDto.Response> multiResponseDto = new MultiResponseDto<>(response, page);
        return ResponseEntity.ok().body(multiResponseDto);
    }

    @Override
    public ResponseEntity getSoftDeletedComment(long commentId) {
        ArticleComment articleComment = findVerfiedArticleComment(commentId);
       ArticleCommentDto.Response response = articleCommentMapper.articleCommentToArticleCommentResponse(articleComment);
       return new ResponseEntity(response, HttpStatus.OK);
    }

    @Override
    public ResponseEntity getSoftDeletedComments(Pageable pageable) {
        pageable = PageRequest.of(pageable.getPageNumber()-1, pageable.getPageSize(), Sort.by("deleted_at").descending());
        Page<ArticleComment> page = articleCommentRepository.findSoftDeletedArticleComment(pageable);
        List<ArticleCommentDto.Response> response =articleCommentMapper.articleCommentsToArticleCommentResponses(page.getContent());
        MultiResponseDto<ArticleCommentDto.Response> multiResponseDto = new MultiResponseDto<>(response, page);
        return ResponseEntity.ok().body(multiResponseDto);
    }

    private ArticleComment findVerfiedArticleComment(Long commentId) {
        ArticleComment foundComment = articleCommentRepository.findSoftDeletedArticleCommentById(commentId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.ARTICLE_COMMENT_NOT_FOUND)
        );
        return foundComment;
    }



    public CertificationDto.Response patchCertification(Certification certification, Long certificatedId, Long memberId) {
        Certification findVerifiedCertification = certificationService.findVerifiedCertification(certificatedId);
        findVerifiedCertification.setCertificationStatus(certification.getCertificationStatus());
        CertificationDto.Response response = certificationMapper.certificationToResponse(findVerifiedCertification);
        response.setMessage("퍼포머 인증이 수정됐습니다.");

        return response;
    }


}
