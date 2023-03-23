package codestates.frogroup.indiego.global.security.auth.filter;


import codestates.frogroup.indiego.config.AES128Config;
import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.entity.Profile;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.redis.RedisDao;
import codestates.frogroup.indiego.global.security.auth.dto.LoginDto;

import static org.assertj.core.api.AssertionsForClassTypes.assertThatCode;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

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
import org.springframework.security.authentication.AuthenticationManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class JwtAuthenticationFilterTest {

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
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
        LoginDto loginDto = new LoginDto("email@example.com", "password", "ROLE_USER");
        Member member = new Member(1l, "email@example.com" ,"password", new Profile(), "ROLE_USER", new Coordinate() );
        List<String> roles = new ArrayList<>();
        roles.add("ROLE_USER");
        member.setRoles(roles);

        when(memberService.findVerifiedMember(loginDto.getEmail())).thenReturn(member);

        // when, then
        assertThatCode(() -> jwtAuthenticationFilter.checkRole(loginDto))
                .doesNotThrowAnyException();
    }

    @Test
    public void givenIncorrectRole_whenCheckRole_thenThrowException() {
        // given
        LoginDto loginDto = new LoginDto("email@example.com", "password", "ROLE_ADMIN");
        Member member =  new Member(1l, "email@example.com" ,"password", new Profile(), "ROLE_USER", new Coordinate() );
        List<String> roles = new ArrayList<>();
        roles.add("ROLE_USER");
        member.setRoles(roles);

        when(memberService.findVerifiedMember(loginDto.getEmail())).thenReturn(member);

        // when, then
        assertThatThrownBy(() -> jwtAuthenticationFilter.checkRole(loginDto))
                .isInstanceOf(BusinessLogicException.class)
                .hasMessage(ExceptionCode.MEMBER_NOT_FOUND.getMessage());
    }
}