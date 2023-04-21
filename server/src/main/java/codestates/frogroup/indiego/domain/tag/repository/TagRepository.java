package codestates.frogroup.indiego.domain.tag.repository;

import codestates.frogroup.indiego.domain.show.repository.querydsl.ShowRepositoryCustom;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import codestates.frogroup.indiego.domain.tag.repository.querydsl.TagRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long>, TagRepositoryCustom {
    Optional<Tag> findByName(String name);
}
