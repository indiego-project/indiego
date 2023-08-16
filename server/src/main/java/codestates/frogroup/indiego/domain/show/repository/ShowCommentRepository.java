package codestates.frogroup.indiego.domain.show.repository;

import codestates.frogroup.indiego.domain.show.entity.ShowComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShowCommentRepository extends JpaRepository<ShowComment, Long> {
    List<ShowComment> findAllByShowId(Long showId);

    Integer countByShowId(Long showId);

    ShowComment findByMember_Id(Long memberId);

    ShowComment findByShowIdAndMemberId(Long showId, Long memberId);

}
