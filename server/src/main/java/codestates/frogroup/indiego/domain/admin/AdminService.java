package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.entity.Member;
import org.springframework.http.ResponseEntity;

public interface AdminService {
    ResponseEntity certifyPerformer(Long certificationId);
    ResponseEntity softDeleteArticle(Long articleId);
}
