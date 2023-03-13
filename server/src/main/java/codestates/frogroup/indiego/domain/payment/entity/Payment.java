package codestates.frogroup.indiego.domain.payment.entity;

import codestates.frogroup.indiego.domain.common.auditing.BaseTime;
import codestates.frogroup.indiego.domain.member.entity.Member;
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

    @Column(nullable = false, unique = true)
    private String merchantUid; // 가맹점에서 생성하는 주문 번호

    @Column(nullable = false, unique = true)
    private String orderId; // 직접 생성하는 주문 번호

    private String name; // 결제 이름

    @Column(nullable = false)
    private Integer amount; // 결제 금액

    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private Member buyer;

    private String buyerPhone;

    @Enumerated(EnumType.STRING)
    private PaymentMethod method; // 결제 수단

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentStatus status; // 결제 상태

    @Builder
    public Payment(String orderId, String name, Integer amount,
                   Member buyer, String buyerPhone, PaymentStatus status) {
        this.orderId = orderId;
        this.name = name;
        this.amount = amount;
        this.buyer = buyer;
        this.buyerPhone = buyerPhone;
        this.status = status;
    }
}
