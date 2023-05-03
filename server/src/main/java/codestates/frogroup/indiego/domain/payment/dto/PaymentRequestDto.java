package codestates.frogroup.indiego.domain.payment.dto;

import codestates.frogroup.indiego.domain.payment.entity.Payment;
import codestates.frogroup.indiego.domain.payment.enums.PaymentStatus;
import codestates.frogroup.indiego.domain.payment.enums.PaymentType;
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

    public Payment toEntity() {
        return Payment.builder()
                .amount(amount)
                .orderId(UUID.randomUUID().toString())
                .paymentType(paymentType)
                .orderName(orderName)
                .paymentStatus(PaymentStatus.READY)
                .build();
    }
}
