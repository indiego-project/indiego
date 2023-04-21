package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CertificationRepository extends JpaRepository<Certification,Long> {
    Optional<Certification> findByMemberId(Long memberId);
    @Query("SELECT c FROM Certification c WHERE c.certificationStatus = :status")
    Page<Certification> findAll(Certification.CertificationStatus status, PageRequest pageRequest);

}
