package codestates.frogroup.indiego.domain.member;

import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.entity.Profile;
import codestates.frogroup.indiego.domain.member.enums.ProfileImage;

import java.util.ArrayList;

public class MemberFactory {

    public static Member createMember(){
        Profile profile = new Profile("test", "testAddress", ProfileImage.BASIC_IMAGE_FIVE.getUrl(),"test");
        Member mockedMember = Member.builder()
                .id(1L)
                .email("test@gmail.com")
                .password("testPassword")
                .profile(new Profile()) // You might need to mock Profile as well
                .coordinate(new Coordinate()) // You might need to mock Coordinate as well
                .roles("PERFORMER")
                .build();

        mockedMember.setProfile(profile);
        return mockedMember;

    }
}
