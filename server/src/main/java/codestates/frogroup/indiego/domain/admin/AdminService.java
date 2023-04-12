package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public interface AdminService {
    ResponseEntity certifyPerformer(Long certificationId);
    ResponseEntity softDeleteArticle(Long articleId);

}
