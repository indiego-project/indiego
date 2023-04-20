package codestates.frogroup.indiego.domain.tag.controller;

import codestates.frogroup.indiego.domain.tag.dto.TagDto;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import codestates.frogroup.indiego.domain.tag.mapper.TagMapper;
import codestates.frogroup.indiego.domain.tag.service.TagService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@Valid
@RestController
@RequiredArgsConstructor
@RequestMapping("/tags")
public class TagController {

    private final TagService tagService;
    private final TagMapper tagMapper;

    @GetMapping
    public ResponseEntity getTags(@RequestParam("type") String type) {

        List<Tag> findTags = tagService.findTags(type);
        List<TagDto.Response> tagListResponseDto = tagMapper.tagListToTagListResponseDto(findTags);

        return new ResponseEntity<>(new SingleResponseDto<>(tagListResponseDto), HttpStatus.OK);
    }


    /*
    * 추후 Admin 계정에서 태그관리를 하도록
    * 사용한다면 type에 대한 정의가 필요, 현재는 카테고리 이름을 되어있음.
    * */
    @PostMapping
    public ResponseEntity postTag(@Valid @RequestBody TagDto.Post tagDto) {
        Tag tag = tagMapper.tagDtoToTag(tagDto);
        Tag createdTag = tagService.createTag(tag);
        TagDto.Response response = tagMapper.tagToTagResponseDto(createdTag);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

}
