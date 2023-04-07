package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository extends JpaRepository<Certification,Long> {

}
