package codestates.frogroup.indiego.domain.tag.repository.querydsl;

import codestates.frogroup.indiego.domain.show.dto.QShowListResponseDto;
import codestates.frogroup.indiego.domain.show.dto.QShowMapsResponse;
import codestates.frogroup.indiego.domain.show.dto.ShowListResponseDto;
import codestates.frogroup.indiego.domain.show.dto.ShowMapsResponse;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.tag.dto.TagListResponseDto;
import codestates.frogroup.indiego.domain.tag.entity.QTag;
import codestates.frogroup.indiego.domain.tag.entity.Tag;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.data.support.PageableExecutionUtils;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;

import static codestates.frogroup.indiego.domain.show.entity.QShow.show;
import static codestates.frogroup.indiego.domain.tag.entity.QTag.*;
import static java.time.LocalDate.*;

@Slf4j
public class TagRepositoryCustomImpl extends QuerydslRepositorySupport implements TagRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    // Querydsl의 리포지토리 지원 받는 부분
    public TagRepositoryCustomImpl(EntityManager em) {
        super(Show.class);
        this.queryFactory = new JPAQueryFactory(em);
    }


    /*
    * 수정필요, 인기가 많은 태그순으로 쿼리문 작성 필요. (show_tag 테이블 참조하여)
    * */
    @Override
    public List<Tag> findByType(String type) {
        return queryFactory
                .select(tag)
                .from(tag)
                .limit(5)
                .orderBy(tag.id.desc())
                .fetch();
    }
}
