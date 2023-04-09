package codestates.frogroup.indiego.domain.admin;

import org.springframework.data.domain.Page;

public interface CertificationService {
    CertificationDto.Response createCertication(Certification certification);
    void deleteCertification(Long certificationId, Long memberId);
    CertificationDto.Response findCertification(Long memberId);
    public Page<Certification> findAllCertification(int page, int size);

    CertificationDto.Response patchCertification(Certification certification, Long certificatedId, Long memberId);

}
