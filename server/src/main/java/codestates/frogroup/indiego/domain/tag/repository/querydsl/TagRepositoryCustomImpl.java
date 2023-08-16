package codestates.frogroup.indiego.domain.tag.repository.querydsl;

import codestates.frogroup.indiego.domain.tag.entity.Tag;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import java.util.List;

import static codestates.frogroup.indiego.domain.tag.entity.QTag.*;

@Slf4j
public class TagRepositoryCustomImpl extends QuerydslRepositorySupport implements TagRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    // Querydsl의 리포지토리 지원 받는 부분
    public TagRepositoryCustomImpl(EntityManager em) {
        super(Tag.class);
        this.queryFactory = new JPAQueryFactory(em);
    }


    /*
     * 타입 = 카테고리 : 공연,연극 카테고리에 맞는 목록을 반환해주기
     * */
    @Override
    public List<Tag> findByType(String type) {
        return queryFactory
                .select(tag)
                .from(tag)
                .where(tag.type.eq(type))
                .orderBy(tag.id.desc())
                .fetch();
    }
}
