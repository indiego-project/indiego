package codestates.frogroup.indiego.domain.payment.controller;

import codestates.frogroup.indiego.domain.payment.dto.PaymentRequestDto;
import codestates.frogroup.indiego.domain.payment.dto.PaymentResponseDto;
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

    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity requestPayment(@LoginMemberId Long memberId,
                                         @RequestBody PaymentRequestDto paymentRequestDto) {

        PaymentResponseDto response = paymentService.requestPayments(memberId, paymentRequestDto);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PostMapping("/success")
    public ResponseEntity paymentSuccess(@RequestParam String paymentKey,
                                         @RequestParam String orderId,
                                         @RequestParam Long amount) {

        return new ResponseEntity<>(new SingleResponseDto<>(
                paymentService.paymentSuccess(paymentKey, orderId, amount)), HttpStatus.OK);
    }

    @PostMapping("/fail")
    public ResponseEntity paymentFail(@RequestParam String code,
                                      @RequestParam String message,
                                      @RequestParam String orderId) {

        paymentService.paymentFail(message, orderId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(paymentService.createPaymentFailDto(code, message, orderId)), HttpStatus.OK);
    }
}
