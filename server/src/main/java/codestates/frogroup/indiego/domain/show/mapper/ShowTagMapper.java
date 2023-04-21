package codestates.frogroup.indiego.domain.show.mapper;

import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.dto.ShowTagDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring" , unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ShowTagMapper {

    @Mapping(source = "id", target = "showTagId")
    @Mapping(source = "tag.id", target = "tagId")
    @Mapping(source = "show.id", target = "showId")
    ShowTagDto.Response showTagToResponse(ShowTag showTag);

}
