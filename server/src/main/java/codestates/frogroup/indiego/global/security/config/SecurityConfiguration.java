package codestates.frogroup.indiego.global.security.config;

import codestates.frogroup.indiego.config.AES128Config;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.redis.RedisDao;
import codestates.frogroup.indiego.global.security.auth.enums.Roles;
import codestates.frogroup.indiego.global.security.auth.filter.JwtAuthenticationFilter;
import codestates.frogroup.indiego.global.security.auth.filter.JwtVerificationFilter;
import codestates.frogroup.indiego.global.security.auth.handler.*;
import codestates.frogroup.indiego.global.security.auth.jwt.TokenProvider;
import codestates.frogroup.indiego.global.security.auth.oauth.OAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
//@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfiguration {
	private final TokenProvider tokenProvider;
	private final OAuthService oAuthService;
	private final MemberService memberService;
	private final RedisDao redisDao;
	private final AES128Config aes128Config;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
				.headers().frameOptions().sameOrigin()
				.and()
				.csrf().disable()
				.cors().configurationSource(corsConfigurationSource())
				.and()
				.formLogin().disable()
				.httpBasic().disable()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
				.exceptionHandling()
				.authenticationEntryPoint(new MemberAuthenticationEntryPoint())
				.accessDeniedHandler(new MemberAccessDeniedHandler())
				.and()
				.apply(new CustomFilterConfigurer())
				.and()
				.authorizeHttpRequests(authorize -> authorize
						.antMatchers(HttpMethod.POST, "/members/login").permitAll()
						.antMatchers(HttpMethod.POST, "/members/signup").permitAll()
						.antMatchers(HttpMethod.PATCH, "members/performer/*").hasAnyRole(Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.POST, "/members/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.PATCH, "/members/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.PUT, "/members/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.DELETE, "/members/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.POST, "/shows").hasAnyRole(Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.POST, "/shows/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.GET, "/shows/seller").hasAnyRole(Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.PATCH, "/shows/*").hasAnyRole(Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.PATCH, "/shows/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.PUT, "/shows/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.DELETE, "/shows").hasAnyRole(Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.DELETE, "/shows/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.POST, "/articles/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.PATCH, "/articles/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.PUT, "/articles/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.DELETE, "/articles/**").hasAnyRole(Roles.USER.getRole(),Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(), Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.POST, "/admins/**").hasAnyRole(Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.GET, "/admins/**").hasAnyRole(Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.DELETE, "/admins/**").hasAnyRole(Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.POST, "/certifications").hasAnyRole(Roles.NON_CERTIFIED_PERFORMER.getRole())
						.antMatchers(HttpMethod.GET, "/certifications").hasAnyRole(Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.GET, "/certifications/**").hasAnyRole(Roles.NON_CERTIFIED_PERFORMER.getRole(),Roles.PERFORMER.getRole(),Roles.ADMIN.getRole())
						.antMatchers(HttpMethod.DELETE, "/certifications").hasAnyRole(Roles.NON_CERTIFIED_PERFORMER.getRole())
						.antMatchers(HttpMethod.PUT, "/certifications").hasAnyRole(Roles.NON_CERTIFIED_PERFORMER.getRole())
						.anyRequest().permitAll()
				)
				.addFilterBefore(
						new ExceptionHandlerFilter(),
						JwtAuthenticationFilter.class
				)
				.oauth2Login(oauth2 -> oauth2
						.successHandler(new OAuth2MemberSuccessHandler(tokenProvider,memberService,redisDao,aes128Config))
						.userInfoEndpoint() // OAuth2 로그인 성공 이후 사용자 정보를 가져올 때 설정 담당
						.userService(oAuthService)
				); // OAuth2 로그인 설정 시작점
		return http.build();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(List.of("http://localhost:3000",
				"http://indiego.site.s3-website.ap-northeast-2.amazonaws.com",
				"http://indiego.site",
				"http://devindiego.site",
				"http://devindiego.site.s3-website.ap-northeast-2.amazonaws.com",
				"http://localhost", // 로컬환경 OAuth2 테스트용
				"http://localhost:8080",
				"https://devindiego.site",
				"https://www.devindiego.site",
//				"http://13.125.98.211:80",
				"http://indiego-develop.s3-website.ap-northeast-2.amazonaws.com"));
		configuration.setAllowCredentials(true);
		configuration.addExposedHeader("Authorization");
		configuration.addExposedHeader("Refresh");
		configuration.addAllowedHeader("*");
		configuration.setAllowedMethods(Arrays.asList("GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"));
		configuration.setMaxAge(3600L);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	private class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {

		@Override
		public void configure(HttpSecurity builder) throws Exception {
			AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

			JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager,
					memberService, tokenProvider, redisDao, aes128Config);
			jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");
			jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
			jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

			JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(tokenProvider);

			builder
					.addFilter(jwtAuthenticationFilter)
					.addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
		}
	}
}