package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.article.entity.Article;
import codestates.frogroup.indiego.domain.common.utils.CustomBeanUtils;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.repository.MemberRepository;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class CertificationServiceImpl implements CertificationService{
    MemberService memberService;
    CertificationRepository certificationRepository;
    CertificationMapper certificationMapper;
    CustomBeanUtils<Certification> beanUtils;

    @Override
    public CertificationDto.Response createCertication(Certification certification) {
        Member member = memberService.findVerifiedMember(certification.getMember().getId());
        certification.setMember(member);
        certificationRepository.save(certification);
        CertificationDto.Response response = certificationMapper.certificationToResponse(certification);
        response.setMessage("퍼포머인증 요청 완료됐습니다.");
        return response;
    }

    @Override
    public void deleteCertification(Long certificationId, Long memberId) {
        Certification certification = findVerifiedCertification(certificationId);
        certificationRepository.delete(certification);
    }

    @Override
    public CertificationDto.Response findCertification(Long certificationId) {
        Certification certification = findVerifiedCertification(certificationId);
        CertificationDto.Response response = certificationMapper.certificationToResponse(certification);
        response.setMessage("인증이 수락됐습니다.");
        return response;
    }

    @Override
    public Page<Certification> findAllCertification(int page, int size) {
        return certificationRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public CertificationDto.Response patchCertification(Certification certification, Long certificatedId, Long memberId) {
        Certification findVerifiedCertification = findVerifiedCertification(certificatedId);
        Certification updatedCerti = beanUtils.copyNonNullProperties(certification, findVerifiedCertification);
        updatedCerti.setMember(memberService.findVerifiedMember(memberId));
        CertificationDto.Response response = certificationMapper.certificationToResponse(updatedCerti);
        response.setMessage("퍼포머 인증이 수정됐습니다.");
        return response;
    }


    private Certification findVerifiedCertification(Long certificationId) {

        return certificationRepository.findById(certificationId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.CERTIFICATION_NOT_FOUND));
    }
}
