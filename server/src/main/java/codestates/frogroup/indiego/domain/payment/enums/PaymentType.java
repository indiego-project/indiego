package codestates.frogroup.indiego.domain.payment.enums;

import lombok.Getter;

public enum PaymentType {
    CARD("카드"),
    ACCOUNT_TRANSFER("계좌이체"),
    VIRTUAL_ACCOUNT("가상계좌"),
    TOSS_PAY("토스페이");

    @Getter
    private final String type;

    PaymentType(String type) {
        this.type = type;
    }
}
