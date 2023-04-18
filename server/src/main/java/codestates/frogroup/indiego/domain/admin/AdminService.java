package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public interface AdminService {
    ResponseEntity certifyPerformer(Long certificationId, Long tokenMemberId, String message);
    ResponseEntity denyPerformer(Long certificationId, Long tokenMemberId, String message);
    //ResponseEntity softDeleteArticle(Long articleId);
    ResponseEntity softDeleteComment(Long commentId);
    ResponseEntity getSoftDeletedComment(long commentId);
    ResponseEntity getSoftDeletedComments(Pageable pageable);
    ResponseEntity restoreSofeDeletedComment(Long commentId);
    ResponseEntity getComments(Pageable pageable);
}
