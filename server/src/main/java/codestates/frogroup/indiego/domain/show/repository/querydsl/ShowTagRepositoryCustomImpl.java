package codestates.frogroup.indiego.domain.show.repository.querydsl;

import codestates.frogroup.indiego.domain.show.entity.QShowTag;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static codestates.frogroup.indiego.domain.show.entity.QShow.show;
import static codestates.frogroup.indiego.domain.show.entity.QShowTag.*;

@Slf4j
public class ShowTagRepositoryCustomImpl extends QuerydslRepositorySupport implements ShowTagRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    // Querydsl의 리포지토리 지원 받는 부분
    public ShowTagRepositoryCustomImpl(EntityManager em) {
        super(ShowTag.class);
        this.queryFactory = new JPAQueryFactory(em);
    }


    @Override
    public ShowTag findShowTagByShowIdAndTagId(Long showId, Long tagId) {

        return queryFactory
                .selectFrom(showTag)
                .where(
                        showTag.show.id.eq(showId),
                        showTag.tag.id.eq(tagId)
                )
                .fetchOne();
    }
}
