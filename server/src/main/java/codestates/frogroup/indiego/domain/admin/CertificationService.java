package codestates.frogroup.indiego.domain.admin;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface CertificationService {
    CertificationDto.Response createCertication(Certification certification, Long memberId);
    ResponseEntity deleteCertification(Long certificationId, Long memberId);
    CertificationDto.Response findCertification(Long memberId, Long tokenMemberId);
    public Page<Certification> findAllCertification(int page, int size);

    CertificationDto.Response patchCertification(Certification certification, Long certificatedId, Long memberId);
    CertificationDto.Response findCertificationByMemberId(Long memberId, Long tokenMeberId);

}
