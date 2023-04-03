package codestates.frogroup.indiego.domain.payment.entity;

import lombok.Getter;

public enum PaymentStatus {
    READY("결제 준비"),
    PAID("결제 성공"),
    FAILED("결제 실패"),
    CANCELLED("결제 취소");

    @Getter
    private final String status;

    PaymentStatus(String status) {
        this.status = status;
    }
}
