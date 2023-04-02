package codestates.frogroup.indiego.domain.member.controller;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.dto.MemberDto;
import codestates.frogroup.indiego.domain.member.mapper.MemberMapper;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.fileupload.AwsS3Path;
import codestates.frogroup.indiego.global.fileupload.ImageUploadService;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Slf4j
@RestController
@Validated
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final ImageUploadService awsS3Service;

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post memberPostDto){

        Member member = memberMapper.memberPostDtoToMember(memberPostDto);
        Member saveMember = memberService.createMember(member);
        MemberDto.PostResponse postResponse = memberMapper.memberToPostResponse(saveMember);

        return new ResponseEntity<>(new SingleResponseDto<>(postResponse), HttpStatus.CREATED);
    }

    @PostMapping("/{member-id}/uploads")
    public ResponseEntity uploadProfileImage(@RequestParam MultipartFile file,
                                             @Positive @PathVariable("member-id") Long memberId,
                                             @LoginMemberId Long loginMemberId){

        memberService.verifiedMemberId(memberId, loginMemberId);
        String url = awsS3Service.StoreImage(file, AwsS3Path.PROFILEIMAGE);
        return new ResponseEntity<>(new SingleResponseDto<>(url), HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@Positive @PathVariable("member-id") Long memberId){

        Member verifiedMember = memberService.findVerifiedMember(memberId);
        MemberDto.GetResponse getResponse = memberMapper.memberToGetResponse(verifiedMember);

        return new ResponseEntity<>(new SingleResponseDto<>(getResponse), HttpStatus.OK);
    }

    @GetMapping("/{member-id}/mypage")
    public ResponseEntity getMyMember(@Positive @PathVariable("member-id") Long memberId,
                                      @LoginMemberId Long loginMemberId){

        memberService.verifiedMemberId(memberId, loginMemberId);
        Member verifiedMember = memberService.findVerifiedMember(memberId);
        MemberDto.GetResponse getResponse = memberMapper.memberToGetResponse(verifiedMember);

        return new ResponseEntity<>(new SingleResponseDto<>(getResponse), HttpStatus.OK);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@RequestBody MemberDto.Patch memberPatchDto,
                                      @Positive @PathVariable("member-id") Long memberId,
                                      @LoginMemberId Long loginMemberId){

        memberService.verifiedMemberId(memberId, loginMemberId);
        Member member = memberMapper.memberPatchDtoToMember(memberPatchDto);
        Member updateMember = memberService.updateMember(member,memberId);
        MemberDto.PatchResponse patchResponse = memberMapper.memberToPatchResponse(updateMember);

        return new ResponseEntity<>(new SingleResponseDto<>(patchResponse), HttpStatus.OK);
    }

    //권한바꾸는 patchmaping 추가하기, security config 수정하기
    @PatchMapping("performer/{member-id}")
    public ResponseEntity certifyPerformer(@Positive @PathVariable("member-id") Long memberId){
        MemberDto.GetResponse response =  memberService.certifyPerformer(memberId);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@Positive @PathVariable("member-id") Long memberId,
                                       @LoginMemberId Long loginMemberId){
        memberService.verifiedMemberId(memberId, loginMemberId);
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(new SingleResponseDto<>("회원탈퇴가 완료되었습니다"), HttpStatus.NO_CONTENT);
    }

    @GetMapping("/reissue")
    public ResponseEntity reissue(HttpServletRequest request,
                                  HttpServletResponse response){
        // @CookieValue(value = "refreshToken", required = false) String refreshToken // 쿠키사용

        memberService.reissueAccessToken(request,response);
        return new ResponseEntity(new SingleResponseDto<>("Access Token 재발급 완료!"),HttpStatus.CREATED);
    }

    @GetMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request){
        // @CookieValue(value = "refreshToken", required = false) String refreshToken // 쿠키사용
        memberService.logout(request);
        return new ResponseEntity<>(new SingleResponseDto<>("로그아웃에 성공하였습니다."), HttpStatus.NO_CONTENT);
    }

    @GetMapping("/token")
    public ResponseEntity giveMemberInfo(@LoginMemberId Long memberId) {
        Member member = memberService.findVerifiedMember(memberId);
        MemberDto.PostResponse response = memberMapper.memberToPostResponse(member);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }



}
