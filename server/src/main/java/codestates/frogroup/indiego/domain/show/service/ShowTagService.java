package codestates.frogroup.indiego.domain.show.service;

import codestates.frogroup.indiego.domain.show.dto.ShowTagDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.show.repository.ShowTagRepository;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import codestates.frogroup.indiego.domain.tag.service.TagService;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ShowTagService {

    private final ShowTagRepository showTagRepository;
    private final TagService tagService;
    private final ShowService showService;

    public ShowTag createShowTagByDto(ShowTagDto.Request showTagDto) {
        Long showId = showTagDto.getShowId();
        Long tagId = showTagDto.getTagId();
        this.checkShowTagExistByShowIdAndTagId(showId, tagId);

        ShowTag showTags = new ShowTag();
        Show findShow = showService.findShowById(showId);
        Tag findTag = tagService.findTagById(tagId);
        showTags.updateShow(findShow);
        showTags.updateTag(findTag);

        return showTagRepository.save(showTags);
    }

    public List<ShowTag> createShowTagByShowAndTagsList(Show show, List<String> tags) {
        List<ShowTag> showTags = new ArrayList<>();
        for (String tag : tags) {
            Tag findTag = tagService.findTagByName(tag);
            ShowTag showTag = new ShowTag();
            showTag.updateTag(findTag);
            showTag.updateShow(show);
            showTags.add(showTag);
        }
        return showTags;
    }

    public void deleteShowTag(ShowTagDto.Request showTagDto) {
        Long showId = showTagDto.getShowId();
        Long tagId = showTagDto.getTagId();
        log.info("showId = {}",showId);
        log.info("tagId = {}",tagId);
        ShowTag findShowTag = this.findShowTagByShowIdAndTagId(showId, tagId);
        showTagRepository.delete(findShowTag);
    }

    public void checkShowTagExistByShowIdAndTagId(Long showId, Long tagId) {
        ShowTag findShowTag = showTagRepository.findShowTagByShowIdAndTagId(showId, tagId);
        if(!Objects.isNull(findShowTag)) {
            throw new BusinessLogicException(ExceptionCode.SHOW_TAG_EXIT);
        }
    }

    public ShowTag findShowTagByShowIdAndTagId(Long showId, Long tagId) {
        ShowTag findShowTag = showTagRepository.findShowTagByShowIdAndTagId(showId, tagId);
        if(Objects.isNull(findShowTag)) {
            throw new BusinessLogicException(ExceptionCode.SHOW_TAG_NOT_FOUND);
        }
        return findShowTag;
    }

}
