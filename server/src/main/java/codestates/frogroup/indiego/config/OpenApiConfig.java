package codestates.frogroup.indiego.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {

        Info info = new Info()
                .version("v0.0.3")
                .title("indiego")
                .description("REST API docs");

        return new OpenAPI().info(info);
    }
}
