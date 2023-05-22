package codestates.frogroup.indiego.domain.show.repository.querydsl;

import codestates.frogroup.indiego.domain.show.entity.ShowTag;

public interface ShowTagRepositoryCustom {

    ShowTag findShowTagByShowIdAndTagId(Long showId, Long tagId);
}
