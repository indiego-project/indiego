package codestates.frogroup.indiego.domain.show.service;

import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import codestates.frogroup.indiego.domain.tag.service.TagService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ShowTagService {

    private final TagService tagService;
    public List<ShowTag> createShowTag(Show show, ShowDto.Post showPostDto) {
        List<ShowTag> showTags = new ArrayList<>();
        for (String tag : showPostDto.getTags()) {
            Tag findTag = tagService.findTag(tag);
            ShowTag showTag = new ShowTag();
            showTag.updateTag(findTag);
            showTag.updateShow(show);
            showTags.add(showTag);
        }
        return showTags;
    }
}
