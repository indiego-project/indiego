package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.article.dto.ArticleDto;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Slf4j
@RestController
@RequestMapping("/admins")
@RequiredArgsConstructor
public class AdminController {
    private final AdminServiceImpl adminService;

    @PostMapping("/certifications/{certification-id}")
    public ResponseEntity certifyPerformer(@Positive @PathVariable("certification-id") Long certiId,
                                           @LoginMemberId Long tokenMemberId,
                                           @Valid @RequestBody CertificationDto.AdminPost adminPostDto){
        ResponseEntity response =  adminService.certifyPerformer(certiId, tokenMemberId,adminPostDto.getMessage());
        return response;
    }

    @DeleteMapping("/certifications/{certification-id}")
    public ResponseEntity denyPerformer(@Positive @PathVariable("certification-id") Long certiId,
                                        @LoginMemberId Long tokenMemberId,
                                        @Valid @RequestBody CertificationDto.AdminPost adminPostDto){
        ResponseEntity response =  adminService.denyPerformer(certiId, tokenMemberId, adminPostDto.getMessage());
        return response;
    }
    @GetMapping("/comments")
    public ResponseEntity getComments( @PageableDefault(page = 1, size = 12) Pageable pageable){
        ResponseEntity response= adminService.getComments(pageable);
        return response;
    }

    @PostMapping("/comments/{commentId}")
    public ResponseEntity restoreSoftDeletedComment(@Positive @PathVariable("commentId") Long commentId){
        ResponseEntity response = adminService.restoreSofeDeletedComment(commentId);
        return response;
    }

    @GetMapping("/deletedComments")
    public ResponseEntity getSoftDeletedComments( @PageableDefault(page = 1, size = 12) Pageable pageable){
        ResponseEntity response= adminService.getSoftDeletedComments(pageable);
        return response;
    }

    @GetMapping("/comments/{comment-id}")
    public ResponseEntity getSoftDeletedComment(@Positive @PathVariable("comment-id") Long commentId){
        ResponseEntity response = adminService.getSoftDeletedComment(commentId);
        return response;
    }

    @DeleteMapping("/comments/{comment-id}")
    public ResponseEntity softDeleteComment(@Positive @PathVariable("comment-id")Long commentId){
        ResponseEntity response = adminService.softDeleteComment(commentId);
        return response;
    }
}
