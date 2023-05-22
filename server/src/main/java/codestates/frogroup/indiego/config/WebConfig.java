package codestates.frogroup.indiego.config;

//import codestates.frogroup.indiego.global.logging.LoggingInterceptor;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberEmailResolver;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberIdResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

//@RequiredArgsConstructor
@Configuration
public class WebConfig implements WebMvcConfigurer {
//    final LoggingInterceptor loggingInterceptor;
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new LoginMemberIdResolver());
        resolvers.add(new LoginMemberEmailResolver());
    }
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(loggingInterceptor)
//                .addPathPatterns("/**")
//                .excludePathPatterns("/vendor/**", "/css/*", "/img/*");
//    }
}