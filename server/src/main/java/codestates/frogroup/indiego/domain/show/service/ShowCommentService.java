package codestates.frogroup.indiego.domain.show.service;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowComment;
import codestates.frogroup.indiego.domain.show.entity.ShowReservation;
import codestates.frogroup.indiego.domain.show.repository.ScoreRepository;
import codestates.frogroup.indiego.domain.show.repository.ShowCommentRepository;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.redis.RedisKey;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ShowCommentService {

    private final ShowCommentRepository showCommentRepository;
    private final MemberService memberService;
    private final ScoreRepository scoreRepository;
    private final ShowReservationService showReservationService;
    private final RedisKey redisKey;
    public ShowComment createShowComment(ShowComment showComment, Show show, Member member){
        List<ShowReservation>  optionalShowReservation = showReservationService.findShowReservation(
                show.getId(), member.getId()
        );
       if(optionalShowReservation.size()==0) {
           new BusinessLogicException(ExceptionCode.SHOW_RESERVATION_NOT_FOUND);
       }
        Optional<ShowComment> optionalShowComment = Optional.ofNullable(
                showCommentRepository.findByShowIdAndMemberId(show.getId(), member.getId()));

        if(optionalShowComment.isPresent()){
            throw new BusinessLogicException(ExceptionCode.SHOW_COMMENT_EXIST);
        }
        showComment.addShow(show);
        showComment.addMember(member);

        inputScoreAverage(showComment, show);
        return showCommentRepository.save(showComment);
    }

    private void inputScoreAverage(ShowComment showComment, Show show) {
        //null일 때
        String key = redisKey.getScoreAverageKey(show.getId());
        if(scoreRepository.getValues(key).equals("false")){
            scoreRepository.setValues(key, String.valueOf(show.getScoreAverage()));
        }
        Double scoreAverage = Double.parseDouble(scoreRepository.getValues(key));
        Integer cntPeople = showCommentRepository.countByShowId(show.getId());
        String s = Double.toString((scoreAverage*cntPeople+ showComment.getScore())/ (cntPeople+1));
        scoreRepository.setValues(key, s);
    }


    public ShowComment findShowComment(Long showCommentId){
        Optional<ShowComment> showComment = showCommentRepository.findById(showCommentId);
        return showComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.SHOW_COMMENT_NOT_FOUND));
    }

    public List<ShowComment> findShowCommentList(Long showId){
        List<ShowComment> showCommentList = showCommentRepository.findAllByShowId(showId);
        if(showCommentList == null){
            throw new BusinessLogicException(ExceptionCode.SHOW_COMMENT_NOT_FOUND);
        }
        return showCommentList;
    }

    public ShowComment updateShowComment(ShowComment showComment, ShowComment findShowComment, Show show, Member member){
        verifiedShowComment(findShowComment,show);
        memberService.verifiedMemberId(findShowComment.getMember().getId(), member.getId()); // 작성한 유저가 맞는지 확인
       // Optional.ofNullable(showComment.getScore()).ifPresent(score -> findShowComment.setScore(score));
        findShowComment.setScore(showComment.getScore());
        Optional.ofNullable(showComment.getComment()).ifPresent(comment -> findShowComment.setComment(comment));
        showComment.addMember(member);
        modifyScoreAverage(showComment, show);

        return showCommentRepository.save(findShowComment);
    }

    private void modifyScoreAverage(ShowComment showComment, Show show) {

        String key = redisKey.getScoreAverageKey(show.getId());
        Double scoreAverage = show.getScoreAverage();
        scoreAverage -= showCommentRepository.findByShowIdAndMemberId(show.getId(), showComment.getMember().getId()).getScore();
        scoreAverage += showComment.getScore();
        Integer cntPeople = showCommentRepository.countByShowId(show.getId());
        String s = Double.toString((scoreAverage*cntPeople+ showComment.getScore())/ (cntPeople+1));
        scoreRepository.setValues(key, s);
        show.setScoreAverage(Double.valueOf(s));

    }

    public void deleteShowComment(Long commentId, Long memberId, Show show){
        ShowComment showComment = findShowComment(commentId);
        verifiedShowComment(showComment,show);
        memberService.verifiedMemberId(showComment.getMember().getId(), memberId); // 작성한 유저가 맞는지 확인
        showCommentRepository.delete(showComment);
    }

    // 해당 공연에 있는 한줄평인지 비교해주는 서비스 로직
    public void verifiedShowComment(ShowComment showComment, Show show){
        if(showComment.getShow().getId() != show.getId()){
            throw new BusinessLogicException(ExceptionCode.SHOW_COMMENT_IS_NOT_SAME);
        }
    }
}
