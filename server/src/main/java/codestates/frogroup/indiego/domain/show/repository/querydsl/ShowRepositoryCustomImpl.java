package codestates.frogroup.indiego.domain.show.repository.querydsl;

import codestates.frogroup.indiego.domain.member.entity.QMember;
import codestates.frogroup.indiego.domain.show.dto.*;
import codestates.frogroup.indiego.domain.show.entity.QShowTag;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.tag.entity.QTag;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


import static codestates.frogroup.indiego.domain.member.entity.QMember.*;
import static codestates.frogroup.indiego.domain.show.entity.QShow.show;
import static codestates.frogroup.indiego.domain.show.entity.QShowTag.*;
import static codestates.frogroup.indiego.domain.tag.entity.QTag.*;
import static java.time.LocalDate.*;

@Slf4j
public class ShowRepositoryCustomImpl extends QuerydslRepositorySupport implements ShowRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    // Querydsl의 리포지토리 지원 받는 부분
    public ShowRepositoryCustomImpl(EntityManager em) {
        super(Show.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

    // category : null일 경우 전체, 전체, 음악, 연극
    // LocalDate : start, end : start(goe) end(loe) 사이에 있는 공연
    // address : null일 경우 강남구, 그 외에는 OO구
    // filter : null일 경우 조건 X, 공연명(title), 공연하는사람(nickname)
    // search : 입력한 검색어
    // 쿼리의 신 박성호.
    @Override
    public Page<ShowListDto> findAllByShowSearch(String search, String category, String address, String filter,
                                                         String start, String end, Pageable pageable) {

        // Querydsl 리포지토리 지원을 받는 경우에는
        // from(article)로 시작

        // queryFactory 사용은
        // queryFactory.select(article)로 시작

        // DTO 방법이 여러 가지
        // (1) Projections - 조금 복잡하나 구조적인 측에서는 장점이 존재
        // - Projections.Fields
        // - Projections.Beans
        // - Projections.Constructor

        // 1). 태그 추가 방법 객체로 받기
        List<ShowListDto> content = queryFactory
                .select(
                       show
                )
                .from(show)
                .leftJoin(show.member, member).fetchJoin() // member도 조인하여 쿼리줄이기, N+1 문제로 fetchJoin()
                .leftJoin(show.showTags, showTag).fetchJoin() // showTags 조인하여 중간테이블 가져오기, N+1 문제로 fetchJoin()
                .leftJoin(showTag.tag, tag).fetchJoin() // Tag 조인하여 정보 가져오기, N+1 문제로 fetchJoin()
                .where(
                        searchDateFilter(start, end),
                        categoryEq(category),
                        addressEqOfFindAll(address),
                        filterEq(filter, search)
                )
                .orderBy(show.createdAt.desc()) //최신순
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch() // 영속화 후에 중복 제거
                .stream()
                .distinct()
                .map(ShowListDto::new).collect(Collectors.toList()); // show -> new ShowListDto(show)


        // 2). 기존에 사용하던 코드
//        List<ShowListResponseDto> content = queryFactory
//                .select(new QShowListResponseDto(
//                        show.id,
//                        show.member.profile.nickname,
//                        show.showBoard.address,
//                        show.showBoard.board.title,
//                        show.showBoard.board.image,
//                        show.scoreAverage,
//                        show.showBoard.board.category,
//                        show.showBoard.expiredAt,
//                        show.showBoard.showAt,
//                        show.showBoard.price
//                        ))
//                .from(show)
//                .where(
//                        searchDateFilter(start, end),
//                        categoryEq(category),
//                        addressEqOfFindAll(address),
//                        filterEq(filter, search)
//                        )
//                .orderBy(show.createdAt.desc()) //최신순
//                .offset(pageable.getOffset())
//                .limit(pageable.getPageSize())
//                .fetch();

        JPAQuery<Show> countQuery = queryFactory
                .select(show)
                .from(show)
                .where(
                        searchDateFilter(start, end),
                        categoryEq(category),
                        addressEqOfFindAll(address),
                        filterEq(filter, search)
                )
                .orderBy(show.showBoard.showAt.asc());

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount); // 최적화
    }

    @Override
    public List<ShowListDto> findShowScoreOrCreatedAtDesc(String address, String status) {

        // 1). 태그 추가 방법 객체로 받기
        return queryFactory
                .select(
                        show
                )
                .from(show)
                .leftJoin(show.member, member).fetchJoin() // member도 조인하여 쿼리줄이기, N+1 문제로 fetchJoin()
                .leftJoin(show.showTags, showTag).fetchJoin() // showTags 조인하여 중간테이블 가져오기, N+1 문제로 fetchJoin()
                .leftJoin(showTag.tag, tag).fetchJoin() // Tag 조인하여 정보 가져오기, N+1 문제로 fetchJoin()
                .where(
                        addressEqOfFindShow(address),
                        show.showBoard.showAt.gt(now()))
                .orderBy(sortDesc(status))
                .limit(10)
                .fetch()
                .stream()
                .distinct()
                .map(ShowListDto::new).collect(Collectors.toList()); // show -> new ShowListDto(show);

        // 2). 기존에 사용하던 코드
//        return queryFactory
//                .select(new QShowListResponseDto(
//                        show.id,
//                        show.member.profile.nickname,
//                        show.showBoard.detailAddress,
//                        show.showBoard.board.title,
//                        show.showBoard.board.image,
//                        show.scoreAverage,
//                        show.showBoard.board.category,
//                        show.showBoard.expiredAt,
//                        show.showBoard.showAt,
//                        show.showBoard.price
//                ))
//                .from(show)
//                .where(
//                        addressEqOfFindShow(address),
//                        show.showBoard.showAt.gt(now()))
//                .orderBy(sortDesc(status))
//                .limit(10)
//                .fetch();
    }

    @Override
    public List<ShowMapsResponse> findAllByShowMapsSearch(Double x1, Double x2, Double y1, Double y2) {
        return  queryFactory
                .select(new QShowMapsResponse(
                        show.id,
                        show.member.profile.nickname,
                        show.showBoard.board.title,
                        show.showBoard.detailAddress,
                        show.coordinate.latitude,
                        show.coordinate.longitude,
                        show.showBoard.showAt,
                        show.showBoard.expiredAt,
                        show.showBoard.board.image
                ))
                .from(show)
                .where(
                        mapLatFilter(x1, x2),
                        mapLonFilter(y1, y2)
                )
                .orderBy(show.createdAt.desc())
                .fetch();
    }

    @Override
    public List<ShowMapsResponse> findAllByShowMapsSearch(String search, String filter) {
        return  queryFactory
                .select(new QShowMapsResponse(
                        show.id,
                        show.member.profile.nickname,
                        show.showBoard.board.title,
                        show.showBoard.detailAddress,
                        show.coordinate.latitude,
                        show.coordinate.longitude,
                        show.showBoard.showAt,
                        show.showBoard.expiredAt,
                        show.showBoard.board.image
                ))
                .from(show)
                .where(
                    filterEq(filter,search).and(show.status.eq(Show.ShowStatus.SALE))
                )
                .orderBy(show.createdAt.desc())
                .fetch();
    }

    private BooleanExpression categoryEq(String category) {

        if (Objects.isNull(category) || category.equals("전체")) {
            return null;
        } else if (category.equals("음악")) {
            return show.showBoard.board.category.eq("음악");
        } else if (category.equals("연극")) {
            return show.showBoard.board.category.eq("연극");
        }

        return null;
    }

    private BooleanExpression addressEqOfFindAll(String address) {
        return Objects.isNull(address) ? null : show.showBoard.address.eq(address);
    }

    private BooleanExpression addressEqOfFindShow(String address) {
        if (Objects.isNull(address)) {
            address = "강남구";
        }
        return show.showBoard.address.eq(address);
    }

    private BooleanExpression filterEq(String filter, String search) {
        if (Objects.isNull(filter)) {
            return null;
        } else if (filter.equals("공연명")){
            filter = "공연명";
            return titleContains(search);
        } else {
            filter = "아티스트명";
            return artistContains(search);
        }

    }

    private BooleanExpression titleContains(String search) {
        if (Objects.isNull(search)) {
            return null;
        }
        log.info("# Test titleContains = {}",search);
        return show.showBoard.board.title.containsIgnoreCase(search);
    }

    private BooleanExpression artistContains(String search) {
        if (Objects.isNull(search)) {
            return null;
        }
        log.info("# Test artistContains = {}",search);
        return show.member.profile.nickname.containsIgnoreCase(search);
    }

    private BooleanExpression searchDateFilter(String start, String end) {

        LocalDate startDate = Objects.isNull(start) ? MIN.withYear(LocalDate.now().getYear()) : parse(start, DateTimeFormatter.ISO_DATE);
        LocalDate endDate = Objects.isNull(end) ? MAX.withYear(LocalDate.now().getYear()) : parse(end, DateTimeFormatter.ISO_DATE);

        return show.showBoard.showAt.between(LocalDate.from(LocalDateTime.of(startDate, LocalTime.MIN)),
                LocalDate.from(LocalDateTime.of(endDate, LocalTime.MAX).withNano(0)))
                .and(show.status.eq(Show.ShowStatus.SALE));
    }

    private BooleanExpression mapLatFilter(Double x1, Double x2) {
        return show.coordinate.latitude.between(x1,x2).and(show.status.eq(Show.ShowStatus.SALE));
    }

    private BooleanExpression mapLonFilter(Double y1, Double y2) {
        return show.coordinate.longitude.between(y1,y2).and(show.status.eq(Show.ShowStatus.SALE));
    }

    private static OrderSpecifier<?> sortDesc(String sort) {
        // sort가 Null일 경우는 최신순으로 반환
        if(Objects.isNull(sort)) {
            return show.createdAt.desc();
        }
        return sort.equals("최신순") ? show.createdAt.desc() : show.scoreAverage.desc();
    }

//    private BooleanExpression searchEq(String search) {
//
//        if (Objects.isNull(search)) {
//            return null;
//        } else {
//            return article.member.profile.nickname.containsIgnoreCase(search)
//                    .or(article.board.title.containsIgnoreCase(search))

//                    .or(article.board.content.containsIgnoreCase(search));
//        }
//    }
//    private BooleanExpression categoryEq(String category) {
//        return hasText(category) ? article.board.category.eq(category) : article.board.category.eq("자유게시판");
//    }
//

//    private BooleanExpression searchTitleEq(String search) {
//        return hasText(search) ? article.board.title.containsIgnoreCase(search) : null;

//    }

    // LocalDate : start, end : start(goe) end(loe) 사이에 있는 공연


}
