package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.common.utils.CustomBeanUtils;
import codestates.frogroup.indiego.domain.member.dto.MemberDto;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.entity.MemberBookMark;
import codestates.frogroup.indiego.domain.member.entity.Profile;
import codestates.frogroup.indiego.domain.member.mapper.MemberMapper;
import codestates.frogroup.indiego.domain.member.repository.MemberRepository;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.security.auth.enums.Roles;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import javax.transaction.Transactional;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.ExpectedCount.times;


@RunWith(MockitoJUnitRunner.class)
@Transactional
class CertificationServiceImplTest {
    @Mock
    MemberService memberService;

    @Mock
    CertificationRepository certificationRepository;

    @Mock
    CertificationMapper certificationMapper;

    @Mock
    CustomBeanUtils<Certification> beanUtils;

    @InjectMocks
    CertificationServiceImpl certificationService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("퍼포머 인증을 생성한다.")
    void createCertificationTest() {
        // given
        Certification certification = Certification.builder()
                .id(1L)
                .member(Member.builder().id(1L).build())
                .build();
        Certification savedCertification = Certification.builder()
                .id(1L)
                .member(Member.builder().id(1L).build())
                .build();
        CertificationDto.Response expectedResponse = CertificationDto.Response.builder()
                .id(1L)
                .message("퍼포머인증 요청 완료됐습니다.")
                .build();
        when(memberService.findVerifiedMember(anyLong())).thenReturn(Member.builder().id(1L).build());
        when(certificationRepository.save(any())).thenReturn(savedCertification);
        when(certificationMapper.certificationToResponse(any())).thenReturn(expectedResponse);

        // when
        CertificationDto.Response actualResponse = certificationService.createCertication(certification);

        // then
        assertEquals(expectedResponse, actualResponse);
    }

    @Test
    @DisplayName("퍼포머 인증을 삭제한다.")
    void deleteCertificationTest() {
        // given
        Certification certification = Certification.builder().id(1L).build();
        when(certificationRepository.findById(anyLong())).thenReturn(Optional.of(certification));

        // when
        certificationService.deleteCertification(1L, 1L);

        // then
        Mockito.verify(certificationRepository, Mockito.times(1)).delete(eq(certification));
    }

    @Test
    @DisplayName("퍼포머 인증을 조회한다.")
    void findCertificationTest() {
        // given
        Certification certification = Certification.builder().id(1L).build();
        CertificationDto.Response expectedResponse = CertificationDto.Response.builder()
                .id(1L)
                .build();
        when(certificationRepository.findById(anyLong())).thenReturn(Optional.of(certification));
        when(certificationMapper.certificationToResponse(certification)).thenReturn(expectedResponse);

        // when
        CertificationDto.Response actualResponse = certificationService.findCertification(certification.getId());


        assertThat(actualResponse).isEqualTo(expectedResponse);

    }

}
