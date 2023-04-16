package codestates.frogroup.indiego.domain.payment.service;

import codestates.frogroup.indiego.domain.payment.dto.PaymentSuccessDto;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.payment.config.PaymentConfig;
import codestates.frogroup.indiego.domain.payment.dto.PaymentRequestDto;
import codestates.frogroup.indiego.domain.payment.dto.PaymentResponseDto;
import codestates.frogroup.indiego.domain.payment.entity.Payment;
import codestates.frogroup.indiego.domain.payment.repository.PaymentRepository;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Collections;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final MemberService memberService;
    private final PaymentConfig paymentConfig;

    @Transactional
    public PaymentResponseDto requestPayments(Long memberId, PaymentRequestDto paymentRequestDto) {
        Member findMember = memberService.findVerifiedMember(memberId);
        verifyAmount(paymentRequestDto.getAmount());
//        paymentTypeVerified(paymentRequestDto.getPaymentType());

        Payment payment = paymentRequestDto.toEntity();
        payment.setCustomer(findMember);

        return paymentRepository.save(payment).toResponseDto();
    }

    @Transactional
    public PaymentSuccessDto paymentSuccess(String paymentKey, String orderId, Long amount) {
        Payment payment = verifyPayment(orderId, amount);
        PaymentSuccessDto result = requestPaymentAccept(paymentKey, orderId, amount);
        payment.setPaymentKey(paymentKey);
        payment.setPaymentApproved(true);

        return result;
    }

    @Transactional
    public PaymentSuccessDto requestPaymentAccept(String paymentKey, String orderId, Long amount) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = getHeaders();
        JSONObject params = new JSONObject();
        params.put("orderId", orderId);
        params.put("amount", amount);

        PaymentSuccessDto result = null;

        try {
            result = restTemplate.postForObject(PaymentConfig.URL + paymentKey,
                    new HttpEntity<>(params, headers),
                    PaymentSuccessDto.class);
        } catch (Exception e) {
            throw new BusinessLogicException(ExceptionCode.PAYMENT_ALREADY_APPROVED);
        }

        return result;
    }

    @Transactional
    public void paymentFail(String message, String orderId) {
        Payment findPayment = paymentRepository.findByOrderId(orderId).orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.PAYMENT_NOT_FOUND);
        });

        findPayment.setPaymentApproved(false);
        findPayment.setFailDescription(message);
    }

    /**
     * 결제 검증
     */
    public Payment verifyPayment(String orderId, Long amount) {
        Payment verifiedPayment = paymentRepository.findByOrderId(orderId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.PAYMENT_NOT_FOUND));

        if (verifiedPayment.getAmount().equals(amount)) {
            throw  new BusinessLogicException(ExceptionCode.AMOUNT_NOT_EQUAL);
        }
        return verifiedPayment;
    }

    /**
     * 결제 금액 검증
     */
    private void verifyAmount(Long amount) {
        if (amount == null || amount < 1000) {
            throw new BusinessLogicException(ExceptionCode.NOT_MINIMUM_AMOUNT);
        }
    }

    @Transactional
    public HttpHeaders getHeaders() {
        HttpHeaders headers = new HttpHeaders();
        String encodedAuthKey = new String(
                Base64.getEncoder().encode((paymentConfig.getTestSecretKey() + ":").getBytes(StandardCharsets.UTF_8)));
        headers.setBasicAuth(encodedAuthKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        return headers;
    }

//    /**
//     * payType 검증
//     */
//    private void paymentTypeVerified(PaymentType paymentType) {
//        String type = paymentType.getType();
//
//        if (!type.equals("CARD") && !type.equals("카드")) {
//            throw new BusinessLogicException(ExceptionCode.PAYMENT_TYPE_NOT_AVAILABLE);
//        }
//    }
}
