package codestates.frogroup.indiego.domain.payment.service;

import codestates.frogroup.indiego.domain.payment.dto.PaymentFailDto;
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
import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.Objects;

@Slf4j
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
        HttpHeaders headers = getHeadersForPaymentSuccess();
        JSONObject params = new JSONObject();
        params.put("paymentKey", paymentKey);
        params.put("orderId", orderId);
        params.put("amount", amount);

        PaymentSuccessDto result = null;
        result = restTemplate.postForObject(PaymentConfig.URL, new HttpEntity<>(params, headers), PaymentSuccessDto.class);

        return result;
    }

    @Transactional
    public void paymentFail(String message, String orderId) {
        Payment findPayment = paymentRepository.findByOrderId(orderId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.PAYMENT_NOT_FOUND));

        findPayment.setPaymentApproved(false);
        findPayment.setFailDescription(message);
    }

    /**
     * 결제 검증
     */
    public Payment verifyPayment(String orderId, Long amount) {
        Payment verifiedPayment = paymentRepository.findByOrderId(orderId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.PAYMENT_NOT_FOUND));

        if (!Objects.equals(verifiedPayment.getAmount(), amount)) {
            throw new BusinessLogicException(ExceptionCode.AMOUNT_NOT_EQUAL);
        }
        return verifiedPayment;
    }

    /**
     * 결제 금액 검증
     */
    private void verifyAmount(Long amount) {
        if (amount == null || amount < 0) {
            throw new BusinessLogicException(ExceptionCode.NOT_MINIMUM_AMOUNT);
        }
    }

    @Transactional
    public HttpHeaders getHeadersForPaymentSuccess() {
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(paymentConfig.getTestBasicAuth());
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        return headers;
    }

    /**
     * TODO: 단순 DTO 생성을 Service에서 관리하는 것이 옳은가?
     */
    @Transactional
    public PaymentFailDto createPaymentFailDto(String code, String message, String orderId) {
        return PaymentFailDto.builder()
                .errorCode(code)
                .errorMessage(message)
                .orderId(orderId)
                .build();
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
