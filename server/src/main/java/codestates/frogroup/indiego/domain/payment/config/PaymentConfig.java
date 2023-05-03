package codestates.frogroup.indiego.domain.payment.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Getter
@Configuration
public class PaymentConfig {

    public static final String URL = "https://api.tosspayments.com/v1/payments/";

    @Value("${payments.toss.test_client_key}")
    private String testClientKey;

    @Value("${payments.toss.test_secret_key}")
    private String testSecretKey;

    @Value("${payments.toss.test_basic_auth}")
    private String testBasicAuth;
}
