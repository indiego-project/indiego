package codestates.frogroup.indiego.domain.payment.entity;

import lombok.Getter;

public enum PaymentType {
    CARD("카드"),
    ACCOUNT_TRANSFER("계좌이체"),
    VIRTUAL_ACCOUNT("가상계좌"),
    CELL_PHONE("휴대폰");

    @Getter
    private final String type;

    PaymentType(String type) {
        this.type = type;
    }
}
