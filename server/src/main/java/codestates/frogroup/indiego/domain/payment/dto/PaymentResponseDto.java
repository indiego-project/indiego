package codestates.frogroup.indiego.domain.payment.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResponseDto {

    private String paymentType;

    private Long amount;

    private String orderName;

    private String orderId;

    private String customerEmail;

    private String customerName;

    private LocalDateTime createdAt;

}
