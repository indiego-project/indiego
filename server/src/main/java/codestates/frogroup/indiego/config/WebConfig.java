package codestates.frogroup.indiego.config;

import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberEmailResolver;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberIdResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new LoginMemberIdResolver());
        resolvers.add(new LoginMemberEmailResolver());
    }
}