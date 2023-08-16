package codestates.frogroup.indiego.domain.show.repository;

import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.show.repository.querydsl.ShowTagRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShowTagRepository extends JpaRepository<ShowTag, Long>, ShowTagRepositoryCustom {
}
