package codestates.frogroup.indiego.domain.payment.entity;

import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.payment.dto.PaymentResponseDto;
import codestates.frogroup.indiego.domain.payment.enums.PaymentType;
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
    private Long amount;

    @Column(nullable = false, unique = true)
    private String orderId;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;

    @Column(nullable = false)
    private String orderName;

    @Column(nullable = false)
    private boolean paymentApproved;

    @Column
    private String failDescription;

    @Column
    private String paymentKey;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "customer")
    private Member customer;

    public PaymentResponseDto toResponseDto() {
        return PaymentResponseDto.builder()
                .paymentType(paymentType.getType())
                .amount(amount)
                .orderId(orderId)
                .orderName(orderName)
                .customerEmail(customer.getEmail())
                .customerName(customer.getProfile().getNickname()) // 필요하지 않을 수도 있음
                .createdAt(getCreatedAt())
                .build();
    }

}
