package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.article.dto.ArticleDto;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

    @PostMapping("/certifications/{certification-id}")
    public ResponseEntity certifyPerformer(@Positive @PathVariable("certification-id") Long certiId,
                                           @Valid @RequestBody CertificationDto.AdminPost adminPostDto){
        ResponseEntity response =  adminService.certifyPerformer(certiId, adminPostDto.getMessage());
        return response;
    }

}
