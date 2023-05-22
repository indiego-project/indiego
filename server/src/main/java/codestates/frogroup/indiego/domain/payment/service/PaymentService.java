package codestates.frogroup.indiego.domain.payment.service;

import codestates.frogroup.indiego.domain.payment.dto.PaymentShowInfo;
import codestates.frogroup.indiego.domain.payment.dto.PaymentSuccessDto;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.payment.config.PaymentConfig;
import codestates.frogroup.indiego.domain.payment.dto.PaymentRequestDto;
import codestates.frogroup.indiego.domain.payment.dto.PaymentResponseDto;
import codestates.frogroup.indiego.domain.payment.entity.Payment;
import codestates.frogroup.indiego.domain.payment.enums.PaymentType;
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
import java.util.Map;
import java.util.Objects;

import static codestates.frogroup.indiego.domain.payment.enums.PaymentStatus.CANCELLED;
import static codestates.frogroup.indiego.domain.payment.enums.PaymentStatus.FAILED;
import static codestates.frogroup.indiego.domain.payment.enums.PaymentStatus.PAID;

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
        verifyPaymentType(paymentRequestDto.getPaymentType());

        Payment payment = paymentRequestDto.toEntity();
        payment.setCustomer(findMember);
        payment.setCancel(false);

        return paymentRepository.save(payment).toResponseDto();
    }

    @Transactional
    public PaymentSuccessDto paymentSuccess(String paymentKey, String orderId, Long amount,
                                            PaymentShowInfo paymentShowInfo, String token) {
        Payment payment = verifyPayment(orderId, amount);
        PaymentSuccessDto result = requestPaymentAccept(paymentKey, orderId, amount, paymentShowInfo, token);
        payment.setPaymentKey(paymentKey);
        payment.setPaymentStatus(PAID);

        return result;
    }

    @Transactional
    public PaymentSuccessDto requestPaymentAccept(String paymentKey, String orderId, Long amount,
                                                  PaymentShowInfo paymentShowInfo, String token) {
        PaymentSuccessDto paymentSuccessDto = null;

        try {
            paymentSuccessDto = paymentSuccessAccept(paymentKey, orderId, amount);
        } catch (Exception e) {
            throw new BusinessLogicException(ExceptionCode.PAYMENT_AUTHORIZATION_FAILED);
        }

        showReservationRequest(paymentShowInfo, token);


        return paymentSuccessDto;
    }

    private PaymentSuccessDto paymentSuccessAccept(String paymentKey, String orderId, Long amount) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = getHeadersForPaymentService();
        JSONObject params = new JSONObject();
        params.put("paymentKey", paymentKey);
        params.put("orderId", orderId);
        params.put("amount", amount);

        PaymentSuccessDto response = restTemplate.postForObject(
                PaymentConfig.URL + "confirm", new HttpEntity<>(params, headers), PaymentSuccessDto.class);

        return response;
    }

    private void showReservationRequest(PaymentShowInfo paymentShowInfo, String token) {
        RestTemplate restTemplate = new RestTemplate();
        JSONObject params = new JSONObject();
        HttpHeaders headers = new HttpHeaders();

        headers.set("Authorization", token);
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        params.put("date", paymentShowInfo.getDate());
        params.put("ticketCount", paymentShowInfo.getTicketCount());
        restTemplate.postForObject(
                "https://api.indiego.site/shows/reservations/" + paymentShowInfo.getShowId(),
                new HttpEntity<>(params, headers), Map.class);
    }

    @Transactional
    public void paymentFail(String message, String orderId) {
        Payment findPayment = paymentRepository.findByOrderId(orderId).orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.PAYMENT_NOT_FOUND));

        findPayment.setPaymentStatus(FAILED);
        findPayment.setFailDescription(message);
    }

    @Transactional
    public Map cancelPayment(Long memberId, String paymentKey, String cancelReason) {
        Member verifiedMember = memberService.findVerifiedMember(memberId);
        Payment verifiedPayment = verifyPaymentByMemberIdAndPaymentKey(paymentKey, verifiedMember);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = getHeadersForPaymentService();
        JSONObject params = new JSONObject();
        params.put("cancelReason", cancelReason);
        Map result = restTemplate.postForObject(PaymentConfig.URL + paymentKey + "/cancel", new HttpEntity<>(params, headers), Map.class);
        verifiedPayment.setPaymentStatus(CANCELLED);

        return result;
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
        if (amount == null || amount < 300) {
            log.debug("BusinessLogicException in verifyAmount() : amount={}", amount);
            throw new BusinessLogicException(ExceptionCode.NOT_MINIMUM_AMOUNT);
        }
    }

    /**
     * 결제 수단 검증
     */
    private void verifyPaymentType(PaymentType paymentType) {

        for (PaymentType type : PaymentType.values()) {
            if (type.getType().equals(paymentType.getType())) {
                return;
            }
        }

        log.debug("BusinessLogicException in verifyPamentType() : paymentType={}", paymentType.getType());
        throw new BusinessLogicException(ExceptionCode.PAYMENT_TYPE_NOT_EQUALS);

    }

    @Transactional
    public HttpHeaders getHeadersForPaymentService() {
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(paymentConfig.getTestBasicAuth());
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        return headers;
    }

    private Payment verifyPaymentByMemberIdAndPaymentKey(String paymentKey, Member member) {
        return paymentRepository.findByPaymentKeyAndCustomer_Email(member.getEmail(), paymentKey)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PAYMENT_NOT_FOUND));
    }

}
