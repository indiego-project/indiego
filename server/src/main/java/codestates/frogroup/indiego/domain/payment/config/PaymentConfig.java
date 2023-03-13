package codestates.frogroup.indiego.domain.payment.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PaymentConfig {

    @Value("${pgmodule.app-id}")
    private String apiKey;
    @Value("${pgmodule.secret-key}")
    private String apiSecret;
}
