package codestates.frogroup.indiego.domain.member.mapper;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.dto.MemberDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {

    @Mapping(source = "nickname", target = "profile.nickname")
    @Mapping(source = "role", target = "roles")
    Member memberPostDtoToMember(MemberDto.Post memberPostDto);

    @Mapping(source = "nickname", target = "profile.nickname")
    @Mapping(source = "address", target = "profile.address")
    @Mapping(source = "image", target = "profile.image")
    @Mapping(source = "introduction", target = "profile.introduction")
    @Mapping(source = "latitude", target = "coordinate.latitude")
    @Mapping(source = "longitude", target = "coordinate.longitude")
    Member memberPatchDtoToMember(MemberDto.Patch memberPatchDto);

    @Mapping(source = "profile.nickname", target = "nickname")
    @Mapping(source = "roles", target = "role")
    MemberDto.PostResponse memberToPostResponse(Member member);

    @Mapping(source = "profile.nickname", target = "nickname")
    @Mapping(source = "profile.address", target = "address")
    @Mapping(source = "profile.image", target = "image")
    @Mapping(source = "profile.introduction", target = "introduction")
    @Mapping(source = "coordinate.latitude", target = "latitude")
    @Mapping(source = "coordinate.longitude", target = "longitude")
    MemberDto.PatchResponse memberToPatchResponse(Member member);

    @Mapping(source = "profile.nickname", target = "profile.nickname")
    @Mapping(source = "profile.address", target = "profile.address")
    @Mapping(source = "profile.image", target = "profile.image")
    @Mapping(source = "profile.introduction", target = "profile.introduction")
    @Mapping(source = "coordinate.latitude", target = "latitude")
    @Mapping(source = "coordinate.longitude", target = "longitude")
    @Mapping(source = "roles", target = "role")
    @Mapping(source = "certification.id", target = "certiId")
    MemberDto.GetResponse memberToGetResponse(Member member);

}
