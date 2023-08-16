package codestates.frogroup.indiego.domain.show.controller;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.show.dto.ShowCommentDto;
import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowComment;
import codestates.frogroup.indiego.domain.show.mapper.ShowCommentMapper;
import codestates.frogroup.indiego.domain.show.mapper.ShowMapper;
import codestates.frogroup.indiego.domain.show.service.ShowCommentService;
import codestates.frogroup.indiego.domain.show.service.ShowService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/shows")
@Valid
@RequiredArgsConstructor
public class ShowCommentController {

    private final ShowCommentMapper showCommentMapper;
    private final ShowCommentService showCommentService;
    private final ShowService showService;
    private final MemberService memberService;
    private final ShowMapper showMapper;

    @PostMapping("/{show-id}/comments")
    public ResponseEntity postComment(@PathVariable("show-id") Long showId,
                                      @LoginMemberId Long memberId,
                                      @Valid @RequestBody ShowCommentDto.Post showPostDto) {
        ShowDto.Response response = showService.findShow(showId);
        Show show = showMapper.showResponseToShow(response);
        Member member = memberService.findVerifiedMember(memberId);
        ShowComment showComment = showCommentMapper.commentDtoToComment(showPostDto);
        ShowComment saveShowComment = showCommentService.createShowComment(showComment, show, member);
        ShowCommentDto.Response showCommentResponse = showCommentMapper.commentToResponseDto(saveShowComment);

        return new ResponseEntity<>(new SingleResponseDto<>(showCommentResponse), HttpStatus.CREATED);
    }

    @PatchMapping("/{show-id}/comments/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("show-id") Long showId,
                                       @PathVariable("comment-id") Long commentId,
                                       @LoginMemberId Long memberId,
                                       @Valid @RequestBody ShowCommentDto.Patch showPatchDto) {
        ShowDto.Response response = showService.findShow(showId);
        Show show = showMapper.showResponseToShow(response);
        Member member = memberService.findVerifiedMember(memberId);
        ShowComment findShowComment = showCommentService.findShowComment(commentId);
        ShowComment showComment = showCommentMapper.commentDtoToComment(showPatchDto);
        ShowComment updateShowComment = showCommentService.updateShowComment(showComment, findShowComment, show, member);
        ShowCommentDto.Response showCommentResponse = showCommentMapper.commentToResponseDto(updateShowComment);
        return new ResponseEntity<>(new SingleResponseDto<>(showCommentResponse), HttpStatus.OK);
    }

    @DeleteMapping("/{show-id}/comments/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("show-id") Long showId,
                                        @PathVariable("comment-id") Long commentId,
                                        @LoginMemberId Long memberId) {
        ShowDto.Response response = showService.findShow(showId);
        Show show = showMapper.showResponseToShow(response);
        showCommentService.deleteShowComment(commentId, memberId, show);

        return new ResponseEntity<>(new SingleResponseDto<>("공연 후기가 삭제되었습니다"), HttpStatus.NO_CONTENT);
    }

    @GetMapping("{show-id}/comments")
    public ResponseEntity getComments(@PathVariable("show-id") long showId) {

        List<ShowComment> showCommentList = showCommentService.findShowCommentList(showId);
        List<ShowCommentDto.Response> responses = showCommentMapper.commentListToResponseDtoList(showCommentList);
        return new ResponseEntity<>(new SingleResponseDto<>(responses), HttpStatus.OK);
    }


}
