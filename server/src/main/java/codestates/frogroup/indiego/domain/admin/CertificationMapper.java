package codestates.frogroup.indiego.domain.admin;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",
unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CertificationMapper {
    Certification postToCertification(CertificationDto.Post dto);
    Certification patchToCertification(CertificationDto.Patch dto);
    List<CertificationDto.Response> certificationToCertificationResponseDtos(List<Certification> certificationa);
    Certification responseToCertification(CertificationDto.Response response);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "member.id", target = "memberId")
    @Mapping(source = "member.email", target = "email")
    CertificationDto.Response certificationToResponse(Certification certification);
}
