package codestates.frogroup.indiego.domain.show.repository;

import codestates.frogroup.indiego.domain.member.entity.MemberBookMark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberBookMarkRepository extends JpaRepository<MemberBookMark, Long> {
    MemberBookMark findByShowIdAndMemberId(long showId, long memberId);
}
