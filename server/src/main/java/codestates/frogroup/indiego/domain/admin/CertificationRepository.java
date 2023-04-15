package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CertificationRepository extends JpaRepository<Certification,Long> {
    Optional<Certification> findByMemberId(Long memberId);
}
