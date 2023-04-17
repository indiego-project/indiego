package codestates.frogroup.indiego.domain.show.controller;

import codestates.frogroup.indiego.domain.show.dto.ShowTagDto;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.show.mapper.ShowTagMapper;
import codestates.frogroup.indiego.domain.show.service.ShowTagService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/showtags")
@Valid
@RequiredArgsConstructor
public class ShowTagController {
    private final ShowTagService showTagService;
    private final ShowTagMapper showTagMapper;

    @PostMapping
    public ResponseEntity postShowTag(@Valid @RequestBody ShowTagDto.Request showTagDto) {
        ShowTag createdShowTag = showTagService.createShowTagByDto(showTagDto);
        ShowTagDto.Response response = showTagMapper.showTagToResponse(createdShowTag);

        return new ResponseEntity<>(new SingleResponseDto(response), HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity deleteShowTag(@Valid @RequestBody ShowTagDto.Request showTagDto) {
        showTagService.deleteShowTag(showTagDto);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
