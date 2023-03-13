package codestates.frogroup.indiego.domain.payment.service;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.payment.config.PaymentConfig;
import codestates.frogroup.indiego.domain.payment.entity.PaymentStatus;
import codestates.frogroup.indiego.domain.payment.entity.Payment;
import codestates.frogroup.indiego.domain.payment.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
@Transactional
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentConfig paymentConfig;
    private final PaymentRepository paymentRepository;
    private final MemberService memberService;

    /**
     * 결제 요청 시
     */
    public Payment requestPayment(Long buyerId, String name, Integer amount, String buyerPhone) {
        Member findBuyer = memberService.findVerifiedMember(buyerId);
        Payment payment = Payment.builder()
                .orderId(findBuyer.getProfile().getNickname() + "-"
                        + Objects.hash(findBuyer, name, amount, System.currentTimeMillis()))
                .name(name)
                .amount(amount)
                .buyerPhone(buyerPhone)
                .status(PaymentStatus.READY)
                .build();

        return paymentRepository.save(payment);
    }

}
