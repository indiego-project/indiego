package codestates.frogroup.indiego.domain.show.mapper;

import codestates.frogroup.indiego.domain.show.dto.ShowReservationDto;
import codestates.frogroup.indiego.domain.show.entity.ShowReservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring" , unmappedTargetPolicy = ReportingPolicy.IGNORE,
uses = ShowMapper.class)
public interface ShowReservationMapper {

    // TODO default 를 쓰든 , service Layer 에서 처리를 하든
    // @Mapping(target = "show", expression = "java(new Show(post.getShowId()))")
    //ShowReservation showReservationPostToShowReservation(ShowReservationDto.Post post);

    @Mapping(source = "show.showBoard.board.title", target = "title")
    @Mapping(source = "show.member.profile.nickname", target = "nickname")
    @Mapping(source = "show.showBoard.address", target = "address")
    ShowReservationDto.Response showReservationToShowReservationResponse(ShowReservation showReservation);


    List<ShowReservationDto.Response> showsReservationsToShowResvationResponses(List<ShowReservation> reservations);

}
