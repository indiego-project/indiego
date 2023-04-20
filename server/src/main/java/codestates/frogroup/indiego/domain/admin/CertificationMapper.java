package codestates.frogroup.indiego.domain.admin;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",
unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CertificationMapper {
    @Mapping(source = "memberId", target = "member.id")
    Certification postToCertification(CertificationDto.Post dto);
    Certification patchToCertification(CertificationDto.Patch dto);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "member.id", target = "memberId")
    @Mapping(source = "member.email", target = "email")
    @Mapping(source = "certificationStatus",target = "status")
    List<CertificationDto.Response> certificationToCertificationResponseDtos(List<Certification> certificationa);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "memberId", target = "member.id")
    @Mapping(source = "email", target = "member.email")
    Certification responseToCertification(CertificationDto.Response response);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "member.id", target = "memberId")
    @Mapping(source = "member.email", target = "email")
    @Mapping(source = "certificationStatus",target = "status")
    CertificationDto.Response certificationToResponse(Certification certification);
}
