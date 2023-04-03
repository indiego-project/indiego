package codestates.frogroup.indiego.domain.payment.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

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
