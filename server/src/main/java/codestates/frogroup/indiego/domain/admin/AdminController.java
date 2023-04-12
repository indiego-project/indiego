package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@Slf4j
@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminServiceImpl adminService;
    @DeleteMapping("/{article-id}")
    public ResponseEntity deleteCertification(@Positive @PathVariable("article-id") Long articleId){
        ResponseEntity response = adminService.softDeleteArticle(articleId);
        return  response;
    }

}
