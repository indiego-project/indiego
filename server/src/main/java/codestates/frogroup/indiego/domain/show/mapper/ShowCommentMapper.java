package codestates.frogroup.indiego.domain.show.mapper;

import codestates.frogroup.indiego.domain.show.dto.ShowCommentDto;
import codestates.frogroup.indiego.domain.show.entity.ShowComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ShowCommentMapper {

    ShowComment commentDtoToComment(ShowCommentDto.Post post);

    ShowComment commentDtoToComment(ShowCommentDto.Patch patch);

    @Mapping(source = "member.profile.nickname", target = "nickname")
    @Mapping(source = "member.id", target = "memberId")
    @Mapping(source = "show.id", target = "showId")
    @Mapping(source = "id", target = "commentId")
    @Mapping(source = "score", target = "score")
    ShowCommentDto.Response commentToResponseDto(ShowComment showComment);

    List<ShowCommentDto.Response> commentListToResponseDtoList(List<ShowComment> showCommentList);
}
