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
    private String orderId;
    private String orderName;

    private String customerEmail;
    private String customerName;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    private boolean cancel;
    private String cancelReason;

}
