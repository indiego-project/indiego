package codestates.frogroup.indiego.domain.tag.mapper;

import codestates.frogroup.indiego.domain.tag.dto.TagDto;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TagMapper {
    Tag tagDtoToTag(TagDto.Post tagDto);

    @Mapping(source = "id", target = "tagId")
    TagDto.Response tagToTagResponseDto(Tag tag);

    @Mapping(source = "id", target = "tagId")
    List<TagDto.Response> tagListToTagListResponseDto(List<Tag> tags);
}
