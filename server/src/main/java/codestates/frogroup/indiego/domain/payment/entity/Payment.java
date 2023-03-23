package codestates.frogroup.indiego.domain.payment.entity;

import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.payment.dto.PaymentResponseDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "payments")
public class Payment extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;

    @Column(nullable = false)
    private Long amount;

    @Column(nullable = false)
    private String orderId;

    @Column(nullable = false)
    private String orderName;

    @ManyToOne
    @JoinColumn
    private Member customer;

    public PaymentResponseDto toResponseDto() {
        return PaymentResponseDto.builder()
                .paymentType(paymentType.getType())
                .amount(amount)
                .orderId(orderId)
                .orderName(orderName)
                .customerEmail(customer.getEmail())
//                .customerName(customer.getProfile().getName())
                .createdAt(getCreatedAt())
                .build();
    }


}
