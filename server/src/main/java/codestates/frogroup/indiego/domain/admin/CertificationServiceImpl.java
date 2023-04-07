package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.repository.MemberRepository;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class CertificationServiceImpl implements CertificationService{
    private final MemberRepository memberRepository;
    MemberService memberService;
    CertificationRepository certificationRepository;

    @Override
    public CertificationDto.Response createCertication(Certification certification) {
        Member member = memberService.findVerifiedMember(certification.getMember().getId());
        certification.setMember(member);
        certificationRepository.save(certification);
        return new CertificationDto.Response("퍼포머 인증이 요청됐습니다");
    }

    @Override
    public void deleteCertification(Long certificationId, Long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        certificationRepository.deleteById(certificationId);
    }

    @Override
    public CertificationDto.Response findCertification(Long certificationId) {
        return null;
    }

    @Override
    public CertificationDto.Response findAllCertification() {
        return null;
    }

    @Override
    public CertificationDto.Response patchCertification(Certification certification) {
        return null;
    }


}
