package codestates.frogroup.indiego.domain.show.mapper;

import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring" , unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ShowMapper {

    @Mapping(source = "title", target = "showBoard.board.title")
    @Mapping(source = "content", target = "showBoard.board.content")
    @Mapping(source = "image", target = "showBoard.board.image")
    @Mapping(source = "category", target = "showBoard.board.category")
    @Mapping(source = "price", target = "showBoard.price")
    @Mapping(source = "address", target = "showBoard.address")
    @Mapping(source = "expiredAt", target = "showBoard.expiredAt")
    @Mapping(source = "showAt", target = "showBoard.showAt")
    @Mapping(source = "latitude", target = "coordinate.latitude")
    @Mapping(source = "longitude", target = "coordinate.longitude")
    @Mapping(source = "detailDescription", target = "showBoard.detailDescription")
    @Mapping(source = "detailAddress", target = "showBoard.detailAddress")
    @Mapping(source = "showTime", target = "showBoard.showTime")
    Show showPostDtoToShow(ShowDto.Post post);

    @Mapping(source = "title", target = "showBoard.board.title")
    @Mapping(source = "content", target = "showBoard.board.content")
    @Mapping(source = "image", target = "showBoard.board.image")
    @Mapping(source = "category", target = "showBoard.board.category")
    @Mapping(source = "price", target = "showBoard.price")
    @Mapping(source = "address", target = "showBoard.address")
    @Mapping(source = "expiredAt", target = "showBoard.expiredAt")
    @Mapping(source = "showAt", target = "showBoard.showAt")
    @Mapping(source = "longitude", target = "coordinate.longitude")
    @Mapping(source = "latitude", target = "coordinate.latitude")
    @Mapping(source = "detailDescription", target = "showBoard.detailDescription")
    @Mapping(source = "detailAddress", target = "showBoard.detailAddress")
    @Mapping(source = "showTime", target = "showBoard.showTime")
    Show showPatchDtoToShow(ShowDto.Patch patch);

    @Mapping(source = "showBoard.board.title", target = "title")
    @Mapping(source = "showBoard.board.content", target = "content")
    @Mapping(source = "showBoard.board.image", target = "image")
    @Mapping(source = "showBoard.board.category", target = "category")
    @Mapping(source = "showBoard.price", target = "price")
    @Mapping(source = "showBoard.address", target = "address")
    @Mapping(source = "showBoard.expiredAt", target = "expiredAt")
    @Mapping(source = "showBoard.showAt", target = "showAt")
    @Mapping(source = "coordinate.latitude", target = "latitude")
    @Mapping(source = "coordinate.longitude", target = "longitude")
    @Mapping(source = "status", target = "status")
    @Mapping(source = "showBoard.detailDescription", target = "detailDescription")
    @Mapping(source = "showBoard.detailAddress", target = "detailAddress")
    @Mapping(source = "showBoard.showTime", target = "showTime")
    ShowDto.postResponse showToShowPostResponse(Show show);

    @Mapping(source = "showBoard.board.title", target = "title")
    @Mapping(source = "showBoard.board.content", target = "content")
    @Mapping(source = "showBoard.board.image", target = "image")
    @Mapping(source = "showBoard.board.category", target = "category")
    @Mapping(source = "showBoard.price", target = "price")
    @Mapping(source = "showBoard.address", target = "address")
    @Mapping(source = "showBoard.expiredAt", target = "expiredAt")
    @Mapping(source = "showBoard.showAt", target = "showAt")
    @Mapping(source = "id", target = "id")
    @Mapping(source = "coordinate.latitude", target = "latitude")
    @Mapping(source = "coordinate.longitude", target = "longitude")
    @Mapping(source = "status", target = "status")
    @Mapping(source = "showBoard.detailDescription", target = "detailDescription")
    @Mapping(source = "showBoard.detailAddress", target = "detailAddress")
    @Mapping(source = "showBoard.showTime", target = "showTime")
    @Mapping(source = "member.profile.nickname", target = "nickname")
    ShowDto.Response showToShowResponse(Show show);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "showBoard.board.title", target = "title")
    @Mapping(source = "showBoard.board.image", target = "image")
    @Mapping(source = "member.profile.nickname", target = "nickname")
    @Mapping(source = "showBoard.showAt", target = "showAt")
    @Mapping(source = "showBoard.expiredAt", target = "expiredAt")
    @Mapping(source = "showBoard.detailAddress", target = "detailAddress")
    ShowDto.showListToShowListResponseOfSeller showToShowResponseOfSeller(Show show);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "member.profile.nickname", target = "nickname")
    @Mapping(source = "showBoard.board.title", target = "title")
    @Mapping(source = "showBoard.board.content", target = "content")
    @Mapping(source = "showBoard.board.image", target = "image")
    @Mapping(source = "showBoard.expiredAt", target = "expiredAt")
    @Mapping(source = "showBoard.showAt", target = "showAt")
    List<ShowDto.ShowsResponse> showsToShowsResponse(List<Show> shows);

    @Mapping(source = "title", target = "showBoard.board.title")
    @Mapping(source = "content", target = "showBoard.board.content")
    @Mapping(source = "image", target = "showBoard.board.image")
    @Mapping(source = "category", target = "showBoard.board.category")
    @Mapping(source = "price", target = "showBoard.price")
    @Mapping(source = "address", target = "showBoard.address")
    @Mapping(source = "expiredAt", target = "showBoard.expiredAt")
    @Mapping(source = "showAt", target = "showBoard.showAt")
    @Mapping(source = "id", target = "id")
    @Mapping(source = "latitude", target = "coordinate.latitude")
    @Mapping(source = "longitude", target = "coordinate.longitude")
    @Mapping(source = "status", target = "status")
    @Mapping(source = "detailDescription", target = "showBoard.detailDescription")
    @Mapping(source = "detailAddress", target = "showBoard.detailAddress")
    @Mapping(source = "showTime", target = "showBoard.showTime")
    @Mapping(source = "nickname", target = "member.profile.nickname")
    Show showResponseToShow(ShowDto.Response response);

}
