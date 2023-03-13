package codestates.frogroup.indiego.domain.payment.entity;

import lombok.Getter;

public enum PaymentMethod {
    CARD("카드"),
    ACCOUNT_TRANSFER("계좌이체"),
    VIRTUAL_ACCOUNT("가상계좌"),
    PHONE("휴대폰");

    @Getter
    private final String method;

    PaymentMethod(String method) {
        this.method = method;
    }
}
