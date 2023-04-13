package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.article.entity.Article;
import codestates.frogroup.indiego.domain.article.repository.ArticleRepository;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final MemberService memberService;
    private final CertificationServiceImpl certificationService;
    private final CertificationMapper certificationMapper;
    private final ArticleRepository articleRepository;

    //퍼포머 인증
    public ResponseEntity certifyPerformer(Long certificationId, String message){
        CertificationDto.Response responseDto = certificationService.findCertification(certificationId);
       Certification certification = certificationMapper.responseToCertification(responseDto);
        Member member = memberService.findVerifiedMember(certification.getMember().getId());
        List<String> roles = member.getRoles();
        roles.set(0, "PERFOMER");
        member.setRoles(roles);
        certification.setCertificationStatus(Certification.CertificationStatus.CERTIFICATION_ALLOWED);
        certification.setMessage(message);
        return  new ResponseEntity<>(new SingleResponseDto("퍼포머 인증됐습니다."), HttpStatus.OK);
    }

    @Override
    public ResponseEntity denyPerformer(Long certificationId, String message) {
        CertificationDto.Response responseDto = certificationService.findCertification(certificationId);
        Certification certification = certificationMapper.responseToCertification(responseDto);
        certification.setCertificationStatus(Certification.CertificationStatus.CERTIFICATION_DENIED);
        certification.setMessage(message);
        return  new ResponseEntity<>(new SingleResponseDto("퍼포머 인증 거부됐습니다."), HttpStatus.OK);
    }

    @Override
    public ResponseEntity softDeleteArticle(Long articleId) {
        Article article = articleRepository.findById(articleId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND)
        );
        article.setDeleted(Boolean.TRUE);
        articleRepository.save(article);
        return new ResponseEntity(HttpStatus.OK);

    }

//    public ArticleDto.Response  findSoftDeletedArticle()

}
