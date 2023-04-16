package codestates.frogroup.indiego.domain.payment.controller;

import codestates.frogroup.indiego.domain.payment.config.PaymentConfig;
import codestates.frogroup.indiego.domain.payment.dto.PaymentFailDto;
import codestates.frogroup.indiego.domain.payment.dto.PaymentRequestDto;
import codestates.frogroup.indiego.domain.payment.dto.PaymentResponseDto;
import codestates.frogroup.indiego.domain.payment.entity.Payment;
import codestates.frogroup.indiego.domain.payment.service.PaymentService;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentConfig paymentConfig;
    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity requestPayment(@LoginMemberId Long memberId,
                                         @RequestBody PaymentRequestDto paymentRequestDto) {

        PaymentResponseDto response = paymentService.requestPayments(memberId, paymentRequestDto);
        response.setSuccessUrl(paymentConfig.getSuccessUrl());
        response.setFailUrl(paymentConfig.getFailUrl());

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/success")
    public ResponseEntity paymentSuccess(@RequestParam String paymentKey,
                                         @RequestParam String orderId,
                                         @RequestParam Long amount) {

        return new ResponseEntity<>(new SingleResponseDto<>(
                paymentService.paymentSuccess(paymentKey, orderId, amount)), HttpStatus.OK);
    }

    @GetMapping("fail")
    public ResponseEntity paymentFail(@RequestParam String code,
                                      @RequestParam String message,
                                      @RequestParam String orderId) {

        paymentService.paymentFail(message, orderId);

        return new ResponseEntity<>(new SingleResponseDto<>(
                PaymentFailDto.builder()
                        .errorCode(code)
                        .errorMessage(message)
                        .orderId(orderId)
                        .build()
        ), HttpStatus.OK);
    }
}
