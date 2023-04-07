package codestates.frogroup.indiego.domain.admin;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CertificationMapper {
    Certification postToCertification(CertificationDto.Post post);

}
