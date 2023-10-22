package com.indiego.server.config.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.http.SessionCreationPolicy.*
import org.springframework.security.crypto.factory.PasswordEncoderFactories
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain

@Configuration
class SecurityConfiguration(
    private val corsConfiguration: CorsConfiguration
) {

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .headers { header ->
                header.frameOptions {
                    it.sameOrigin()
                }
            }
            .csrf { it.disable() }
            .cors { it.configurationSource(corsConfiguration.corsConfigurationSource()) }
            .formLogin { it.disable() }
            .httpBasic { it.disable() }
            .sessionManagement { it.sessionCreationPolicy(STATELESS) }
            .exceptionHandling {
                // TODO: 예외처리 로직 구현
            }
            .authorizeHttpRequests {
                it.anyRequest().permitAll()
            }
            .logout { it.logoutSuccessUrl("/login") }
//            .oauth2Login {
//                // TODO: OAuth2 구현
//            }

        return http.build()
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder()
    }
}