package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.article.entity.Article;
import codestates.frogroup.indiego.domain.common.utils.CustomBeanUtils;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.repository.MemberRepository;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.security.auth.enums.Roles;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static codestates.frogroup.indiego.domain.admin.QCertification.certification;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class CertificationServiceImpl implements CertificationService{
    private final MemberService memberService;
    private final CertificationRepository certificationRepository;
    private final CertificationMapper certificationMapper;
    private final CustomBeanUtils<Certification> beanUtils;

    @Override
    public CertificationDto.Response createCertication(Certification certification, Long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        if (certificationRepository.findByMemberId(memberId).isPresent()) throw new BusinessLogicException(ExceptionCode.CERTIFICATION_EXIST);
        certification.setMember(member);
        certification.setCertificationStatus(Certification.CertificationStatus.CERTIFICATION_ASKED);
        certificationRepository.save(certification);
        CertificationDto.Response response = certificationMapper.certificationToResponse(certification);
        response.setMessage("퍼포머인증 요청 완료됐습니다.");
        return response;
    }

    @Override
    public ResponseEntity deleteCertification(Long certificationId, Long memberId) {
        Certification certification = findVerifiedCertification(certificationId);
        if(!certification.getMember().getId().equals(memberId)) throw new BusinessLogicException(ExceptionCode.MEMBER_IS_NOT_SAME);
        certificationRepository.delete(certification);
        return new ResponseEntity(new SingleResponseDto<>("퍼포머 인증 요청을 삭제했습니다."), HttpStatus.OK);
    }

    @Override
    public Certification findCertification(Long certiId, Long tokenMeberId) {

        Certification certification = findVerifiedCertification(certiId);

        //어드민이 아니고 토큰 멤버 아이디와 인증요청의 멤버 아이디가 다른 경우 예외처리
        if(!memberService.findVerifiedMember(tokenMeberId).getRoles().contains(Roles.ADMIN.getRole()) &&
                !certification.getMember().getId().equals(tokenMeberId)){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_PERMISSION);
        }

        CertificationDto.Response response = certificationMapper.certificationToResponse(certification);
        return certification;
    }

    @Override
    public CertificationDto.Response findCertificationByMemberId(Long memberId, Long tokenMeberId) {

        Certification certification = certificationRepository.findByMemberId(memberId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.CERTIFICATION_NOT_FOUND)
        );

//        //어드민이 아니고 토큰 멤버 아이디와 인증요청의 멤버 아이디가 다른 경우 예외처리
//        if(!memberService.findVerifiedMember(tokenMeberId).getRoles().contains(Roles.ADMIN.getRole()) &&
//                !certification.getMember().getId().equals(tokenMeberId)){
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_PERMISSION);
//        }

        CertificationDto.Response response = certificationMapper.certificationToResponse(certification);
        return response;
    }
    @Override
    public Page<Certification> findAllCertification(int page, int size) {
        return certificationRepository.findAll(Certification.CertificationStatus.CERTIFICATION_ASKED,PageRequest.of(page, size));
    }

    @Override
    public CertificationDto.Response patchCertification(Certification certification, Long certificatedId, Long memberId) {
           Certification findVerifiedCertification = findVerifiedCertification(certificatedId);
           findVerifiedCertification.setCertificationStatus(certification.getCertificationStatus());
            CertificationDto.Response response = certificationMapper.certificationToResponse(findVerifiedCertification);
            response.setMessage("퍼포머 인증이 수정됐습니다.");

        return response;
    }


    public Certification findVerifiedCertification(Long certificationId) {

        return certificationRepository.findById(certificationId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.CERTIFICATION_NOT_FOUND));
    }
}
