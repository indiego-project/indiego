package codestates.frogroup.indiego.domain.admin;

public interface CertificationService {
    CertificationDto.Response createCertication(Certification certification);
    void deleteCertification(Long certificationId, Long memberId);
    CertificationDto.Response findCertification(Long memberId);
    CertificationDto.Response findAllCertification();

    CertificationDto.Response patchCertification(Certification certification);

}
