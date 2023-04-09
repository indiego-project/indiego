package codestates.frogroup.indiego.domain.payment.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//@ConfigurationProperties(prefix = "payments") // 스프링 빈으로 등록되지 않는 문제 발생
@Configuration
public class PaymentConfig {

    @Value("${payments.toss.test_client_key}")
    private String testClientKey;

    @Value("${payments.toss.test_secret_key}")
    private String testSecretKey;

//    private String liveClientApiKey;
//
//    private String liveSecretApiKey;

    @Value("${payments.toss.success_url}")
    private String successUrl;

    @Value("${payments.toss.fail_url}")
    private String failUrl;
}
