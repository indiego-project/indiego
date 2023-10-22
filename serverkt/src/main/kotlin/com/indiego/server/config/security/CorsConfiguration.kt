package com.indiego.server.config.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
class CorsConfiguration {

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val corsConfiguration = CorsConfiguration()

        corsConfiguration.apply {
            allowedOrigins = listOf(
                "http://indiego.site.s3-website.ap-northeast-2.amazonaws.com",
                "http://indiego.site",
                "http://devindiego.site",
                "http://devindiego.site.s3-website.ap-northeast-2.amazonaws.com",
                "http://localhost",
                "http://localhost:8080",
                "https://devindiego.site",
                "https://www.devindiego.site",
                "https://indiego.site",
                "https://www.indiego.site",
                "http://indiego-develop.s3-website.ap-northeast-2.amazonaws.com"
            )
            allowCredentials = true
            addExposedHeader("Authorization")
            addExposedHeader("Refresh")
            addAllowedHeader("*")
            allowedMethods = listOf("GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS")
            maxAge = 3600L
        }

        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", corsConfiguration)

        return source
    }
}