package codestates.frogroup.indiego.domain.payment.dto;

import codestates.frogroup.indiego.domain.payment.entity.Payment;
import codestates.frogroup.indiego.domain.payment.entity.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequestDto {

    private PaymentType paymentType;

    private Long amount;

    private String orderName;

    private String successUrl;

    private String failUrl;

    public Payment toEntity() {
        return Payment.builder()
                .amount(amount)
                .orderId(UUID.randomUUID().toString())
                .paymentType(paymentType)
                .orderName(orderName)
                .paymentApproved(false)
                .build();
    }
}
