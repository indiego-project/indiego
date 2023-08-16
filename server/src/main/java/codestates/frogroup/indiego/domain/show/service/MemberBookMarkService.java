package codestates.frogroup.indiego.domain.show.service;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.entity.MemberBookMark;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.mapper.ShowMapper;
import codestates.frogroup.indiego.domain.show.repository.MemberBookMarkRepository;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MemberBookMarkService {
    private final MemberService memberService;
    private final ShowService showService;
    private final MemberBookMarkRepository memberBookMarkRepository;
    private final ShowMapper mapper;

    public HttpStatus manageBookMark(Long showId, long memberId) {

        if (memberBookMarkRepository.findByShowIdAndMemberId(showId, memberId) != null) {
            return deleteBookMark(showId, memberId);
        } else {
            return createMemberBookMark(showId, memberId);
        }
    }

    public HttpStatus createMemberBookMark(Long showId, Long memberId) {
        ShowDto.Response response = showService.findShow(showId);
        Member member = memberService.findVerifiedMember(memberId);
        MemberBookMark memberBookMark = MemberBookMark.builder()
                .member(member)
                .show(mapper.showResponseToShow(response))
                .build();
        memberBookMarkRepository.save(memberBookMark);
        return HttpStatus.CREATED;
    }

    public HttpStatus deleteBookMark(Long showId, Long memberId) {
        MemberBookMark memberBookMark = findVerifiedBookMark(showId, memberId);
        memberBookMarkRepository.delete(memberBookMark);
        return HttpStatus.NO_CONTENT;
    }

    private MemberBookMark findVerifiedBookMark(Long showId, Long memberId) {
        Optional<MemberBookMark> optionalBookMark = Optional.ofNullable(memberBookMarkRepository.findByShowIdAndMemberId(showId, memberId));

        MemberBookMark findBookMark =
                optionalBookMark.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.BOOKMARK_NOT_FOUND));
        return findBookMark;

    }
}
