package codestates.frogroup.indiego.domain.show.controller;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.dto.ShowReservationDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowReservation;
import codestates.frogroup.indiego.domain.show.mapper.ShowMapper;
import codestates.frogroup.indiego.domain.show.mapper.ShowReservationMapper;
import codestates.frogroup.indiego.domain.show.repository.ShowReservationRepository;
import codestates.frogroup.indiego.domain.show.service.ShowReservationService;
import codestates.frogroup.indiego.domain.show.service.ShowService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/shows/reservations")
@Valid
@RequiredArgsConstructor
public class ShowReservationController {
    private final ShowReservationRepository showReservationRepository;
    private final ShowReservationMapper mapper;
    private final ShowReservationService showReservationService;
    private final ShowService showService;
    private final MemberService memberService;
    private final ShowMapper showMapper;


    @PostMapping("/{show-id}")
    public ResponseEntity postReservation(@Valid @RequestBody ShowReservationDto.Post post,
                                          @PathVariable("show-id") Long showId,
                                          @LoginMemberId Long memberId){
        ShowDto.Response response = showService.findShow(showId);
        Show show = showMapper.showResponseToShow(response);
        Member member = memberService.findVerifiedMember(memberId);

        //ToDo 리팩토링
        ShowReservation created = showReservationService.getShowReservation(post, show, member);

        ShowReservationDto.Response reservationResponse = mapper.showReservationToShowReservationResponse(created);
        reservationResponse.setExpired(isExpired(post.getDate()));
        reservationResponse.setNickname(response.getNickname());
        return new ResponseEntity<>(
                reservationResponse
                , HttpStatus.CREATED
        );
    }



    public boolean isExpired(LocalDate date){
        LocalDate now = LocalDate.now();
        return now.isAfter(date);
    }


    @DeleteMapping("/{reservation-id}")
    public ResponseEntity deleteReservation(@PathVariable("reservation-id") long reservationId,
                                            @LoginMemberId Long memberId){
        showReservationService.deleteShow(reservationId, memberId);
        return new ResponseEntity<>(
                HttpStatus.NO_CONTENT
        );
    }


    //USER 예약 조회
    @GetMapping
    public ResponseEntity getShows(@LoginMemberId Long memberId){
        List<ShowReservation> showReservationList =showReservationRepository.findByMember_Id(memberId);
        List<ShowReservationDto.Response> responses = mapper.showsReservationsToShowResvationResponses(showReservationList);
        //ToDo mapper에서 처리하도록
        for(int i=0; i< responses.size(); i++){
            responses.get(i).setDetailAddress(showReservationList.get(i).getShow().getShowBoard().getDetailAddress());
            responses.get(i).setImage(showReservationList.get(i).getShow().getShowBoard().getBoard().getImage());
            responses.get(i).setAddress(showReservationList.get(i).getShow().getShowBoard().getAddress());
            responses.get(i).setLongitude(showReservationList.get(i).getShow().getCoordinate().getLongitude());
            responses.get(i).setLatitude(showReservationList.get(i).getShow().getCoordinate().getLatitude());
            responses.get(i).setShowId(showReservationList.get(i).getShow().getId());
        }
        return new ResponseEntity(
                new SingleResponseDto<>(setExpireds(showReservationList, responses)),
                HttpStatus.OK);

    }

    private List<ShowReservationDto.Response> setExpireds(List<ShowReservation> showReservationList, List<ShowReservationDto.Response> responses) {
        for(int i = 0; i< responses.size(); i++){
            responses.get(i)
                    .setExpired(isExpired(
                            showReservationList.get(i).getDate()));
        }
        return responses;
    }
}
