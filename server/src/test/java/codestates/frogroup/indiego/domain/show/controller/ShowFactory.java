package codestates.frogroup.indiego.domain.show.controller;

import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.common.embedding.Board;
import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.member.MemberFactory;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowBoard;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.tag.entity.Tag;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class ShowFactory extends BaseTime {

    public static ShowDto.Post createShowPostDto() {

        List<Tag> tags = new ArrayList<>();
        List<ShowTag> showTags = new ArrayList<>();
        showTags.add(new ShowTag(1L, new Tag(1L, "흥미로운",
                "연극", "#800000",
                "##fff5f5",showTags
        ), createShow()));
        tags.add(new Tag(1L, "흥미로운",
                "연극", "#800000",
                "##fff5f5", showTags
        ));
        return ShowDto.Post.builder()
                .showAt(LocalDate.now())
                .detailAddress("detailAddress")
                .expiredAt(LocalDate.MAX)
                .image("image")
                .content("content")
                .address("address")
                .showTime("12")
                .detailDescription("detailDescription")
                .title("title")
                .latitude(37.58481899015186)
                .longitude(127.00088309891716)
                .total(0)
                .price(10000)
                .tags(List.of(1L))
                .category("연극")
                .build();
    }

    public static Show createShow() {
        Member member = MemberFactory.createMember();
        List<Tag> tags = new ArrayList<>();
        List<ShowTag> showTags = new ArrayList<>();
        showTags.add(new ShowTag(1L, new Tag(1L, "흥미로운",
                "연극", "#800000",
                "##fff5f5",showTags
        ), null));
        tags.add(new Tag(1L, "흥미로운",
                "연극", "#800000",
                "##fff5f5", showTags
        ));
        return Show.builder()
                .id(1L)
                .member(member) // You might need to mock Member as well
                .showBoard(new ShowBoard(
                        new Board("title","content", "","연극"), // You might need to mock Board as well
                        100,          // Price
                        "123 Main St", // Address
                        null,         // Detail Address
                        LocalDate.of(2024,9,6),// Expired At
                        LocalDate.now(),   // Show At
                        "19",      // Show Time
                        "Mocked description"
                ))
                .coordinate(new Coordinate())
                .status(Show.ShowStatus.SALE)
                .scoreAverage(4.5) // Assuming an average score
                .total(100) // Total seats
                .showTags(showTags) // Empty tags list for now
                .build();

    }

    public static ShowDto.PostResponse createShowPostResponse() {
        Show show = ShowFactory.createShow();
        return ShowDto.PostResponse.builder()
                .show(show)
                .build();

    }

}