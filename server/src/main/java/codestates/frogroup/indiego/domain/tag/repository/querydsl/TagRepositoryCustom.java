package codestates.frogroup.indiego.domain.tag.repository.querydsl;

import codestates.frogroup.indiego.domain.tag.entity.Tag;

import java.util.List;
import java.util.Optional;

public interface TagRepositoryCustom {

    List<Tag> findByType(String type);
}
