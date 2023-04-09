package codestates.frogroup.indiego.global.security.auth.filter;


import codestates.frogroup.indiego.config.AES128Config;
import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.entity.Profile;
import codestates.frogroup.indiego.domain.member.mapper.MemberMapper;
import codestates.frogroup.indiego.domain.member.repository.MemberRepository;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ErrorResponse;
import codestates.frogroup.indiego.global.exception.ExceptionAdvice;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.redis.RedisDao;
import codestates.frogroup.indiego.global.security.auth.dto.LoginDto;

import static org.assertj.core.api.AssertionsForClassTypes.*;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

import codestates.frogroup.indiego.global.security.auth.enums.Roles;
import codestates.frogroup.indiego.global.security.auth.jwt.TokenProvider;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class JwtAuthenticationFilterTest {

    @Mock
    private BusinessLogicException businessLogicException;

    @InjectMocks
    private ExceptionAdvice exceptionAdvice;
    @Mock
    MemberRepository memberRepository;
    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private MemberService memberService;

    @Mock
    private TokenProvider tokenProvider;

    @Mock
    private RedisDao redisDao;

    @Mock
    private AES128Config aes128Config;

    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Before
    public void setUp() {
        jwtAuthenticationFilter = new JwtAuthenticationFilter(
                authenticationManager, memberService, tokenProvider, redisDao, aes128Config);
    }

    // 테스트 메서드 작성
    @Test
    public void givenCorrectRole_whenCheckRole_thenSuccess() {
        // given
        LoginDto loginDto = new LoginDto("email@example.com", "password", "USER");
        Member member = new Member(1L, "email@example.com", "password", new Profile(), "ROLE_USER", new Coordinate());
        List<String> roles = new ArrayList<>();
        roles.add("ROLE_USER");
        member.setRoles(roles);
        // when
        when(memberRepository.findByEmail(loginDto.getEmail())).thenReturn(Optional.ofNullable(member));

        // then
        assertDoesNotThrow(() -> memberService.checkRole(loginDto));
    }



    @Test
    public void givenIncorrectRole_whenCheckRole_thenThrowException() {
        LoginDto loginDto = new LoginDto("email@example.com", "password", "PERFORMER");
        Member member = new Member(1L, "email@example.com", "password", new Profile(), Roles.USER.getRole(), new Coordinate());
        List<String> roles = new ArrayList<>();
        roles.add("ROLE_USER");
        member.setRoles(roles);
//        member.setRoles(Roles.USER.getR);
//        List<String> roles = new ArrayList<>();
//        roles.add("ROLE_USER");
//        member.setRoles(roles);

        // when
        //when(memberService.findVerifiedMember(anyString())).thenReturn(member);
        ExceptionAdvice advice = new ExceptionAdvice();

        // when
        assertThatThrownBy(() -> memberService.checkRole(loginDto))
                .isInstanceOf(BusinessLogicException.class)
                .hasMessageContaining(ExceptionCode.MEMBER_NOT_FOUND.getMessage());

        ResponseEntity<ErrorResponse> responseEntity =
                advice.handleBusinessLogicException(new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        assertThat(responseEntity.getBody().getMessage()).isEqualTo(ExceptionCode.MEMBER_NOT_FOUND.getMessage());
    }
}