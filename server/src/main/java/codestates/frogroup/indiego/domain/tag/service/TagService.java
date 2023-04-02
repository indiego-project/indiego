package codestates.frogroup.indiego.domain.tag.service;

import codestates.frogroup.indiego.domain.tag.entity.Tag;
import codestates.frogroup.indiego.domain.tag.repository.TagRepository;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public Tag createTag(Tag tag) {
        this.checkTag(tag.getName());
        return tagRepository.save(tag);
    }

    public List<Tag> findTags(String type) {
        List<Tag> findTags = tagRepository.findByType(type);

        for (Tag findTag : findTags) {
            log.info("findTag = {} ", findTag.getName());
        }

        return findTags;
    }

    private void checkTag(String name) {
        Optional<Tag> findTag = tagRepository.findByName(name);
        if(findTag.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.TAG_EXIST);
        }
    }
}
