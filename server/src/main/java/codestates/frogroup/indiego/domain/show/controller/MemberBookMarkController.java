package codestates.frogroup.indiego.domain.show.controller;

import codestates.frogroup.indiego.domain.show.service.MemberBookMarkService;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/shows")
@Valid
@RequiredArgsConstructor
public class MemberBookMarkController {
    private final MemberBookMarkService bookMarkService;

    @PutMapping("/{show-id}")
    public ResponseEntity putBookMark(@PathVariable("show-id") long showId,
                                      @LoginMemberId long memnerId) {
        HttpStatus httpStatus = bookMarkService.manageBookMark(showId, memnerId);
        return new ResponseEntity<>(
                httpStatus
        );
    }
}