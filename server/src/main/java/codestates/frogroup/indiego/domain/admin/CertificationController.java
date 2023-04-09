package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.global.dto.MultiResponseDto;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/certification")
@RequiredArgsConstructor
 class CertificationController {
CertificationMapper certificationMapper;
CertificationServiceImpl certificationService;
 @PostMapping
 public ResponseEntity postCertification(@Valid @RequestBody CertificationDto.Post certiPostDto){
   CertificationDto.Response response = certificationService.createCertication(certificationMapper.postToCertification(certiPostDto));
   return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
 }

 @PutMapping
 public ResponseEntity patchCertification(@Valid @Positive Long certificatedId ,
                                          @RequestBody CertificationDto.Patch certiPatchDto,
                                          @LoginMemberId Long memberId){
  CertificationDto.Response response = certificationService.patchCertification(certificationMapper.patchToCertification(certiPatchDto),
          certificatedId, memberId);
  return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
 }

 @GetMapping("/{certification-id}")
 public ResponseEntity getCertification(@Positive @PathVariable("certificated-id") Long certiId){
  CertificationDto.Response response = certificationService.findCertification(certiId);
  return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
 }

 @GetMapping
 public ResponseEntity getCertifications( @PageableDefault(page = 1 ,size = 12) Pageable pageable){

  Page<Certification> responses = certificationService.findAllCertification(pageable.getPageNumber(), pageable.getPageSize());
  List<Certification> certifications =  responses.getContent();

  return new ResponseEntity<>(
          new MultiResponseDto<>(certificationMapper.certificationToCertificationResponseDtos(certifications),
                  responses),
          HttpStatus.OK);
 }

 @DeleteMapping("/{certification-id}")
 public ResponseEntity deleteCertification(@Positive @PathVariable("certificated-id") Long certiId,
                                           @LoginMemberId Long memberId){
  certificationService.deleteCertification(certiId,memberId );
  return new ResponseEntity(HttpStatus.NO_CONTENT);
 }
}
