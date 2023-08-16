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
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ShowTagService {

    private final ShowTagRepository showTagRepository;
    private final TagService tagService;

    public List<ShowTag> createShowTagByShowAndTagsList(Show show, List<Long> tags) {
        List<ShowTag> showTags = new ArrayList<>();
        for (Long tagId : tags) {
            Tag findTag = tagService.findTagById(tagId);
            ShowTag showTag = new ShowTag();
            showTag.updateTag(findTag);
            showTag.updateShow(show);
            showTags.add(showTag);
        }
        return showTags;
    }

    public void updateShowTagByDto(Show show, List<Long> tags) {

        List<ShowTag> showTags = show.getShowTags();
        int showTagSize = showTags.size();
        List<ShowTag> removedShowTagList = new ArrayList<>();
        List<Tag> currentTags = showTags.stream()
                .map(showTag -> showTag.getTag())
                .collect(Collectors.toList());

        // 변경될 태그를 이용해 업데이트 하기
        for (int i = 0; i < tags.size(); i++) {
            Tag changeTag = tagService.findTagById(tags.get(i));
            int index = currentTags.indexOf(changeTag);
            if (this.checkChangeStatus(index)) {
                ShowTag showTag = new ShowTag();
                showTag.updateTag(changeTag);
                showTag.updateShow(show);
                showTags.add(showTag);
            }
        }

        // 변경완료 후 없는 태그를 삭제하기
        for (int i = 0; i < showTagSize; i++) {
            Tag currentTag = tagService.findTagById(showTags.get(i).getTag().getId());
            Long currentTagId = currentTag.getId();
            int index = tags.indexOf(currentTagId);
            if (this.checkChangeStatus(index)) {
                removedShowTagList.add(showTags.get(i));
            }
        }

        for (int i = 0; i < removedShowTagList.size(); i++) {
            showTags.remove(removedShowTagList.get(i));
        }
    }

    public void deleteShowTag(ShowTagDto.Request showTagDto) {
        Long showId = showTagDto.getShowId();
        Long tagId = showTagDto.getTagId();
        ShowTag findShowTag = this.findShowTagByShowIdAndTagId(showId, tagId);
        showTagRepository.delete(findShowTag);
    }

    public void checkShowTagExistByShowIdAndTagId(Long showId, Long tagId) {
        ShowTag findShowTag = showTagRepository.findShowTagByShowIdAndTagId(showId, tagId);
        if (!Objects.isNull(findShowTag)) {
            throw new BusinessLogicException(ExceptionCode.SHOW_TAG_EXIT);
        }
    }

    public ShowTag findShowTagByShowIdAndTagId(Long showId, Long tagId) {
        ShowTag findShowTag = showTagRepository.findShowTagByShowIdAndTagId(showId, tagId);
        if (Objects.isNull(findShowTag)) {
            throw new BusinessLogicException(ExceptionCode.SHOW_TAG_NOT_FOUND);
        }
        return findShowTag;
    }

    private Boolean checkChangeStatus(int index) {
        if (index >= 0) {
            return false;
        }
        return true;
    }
}
