package codestates.frogroup.indiego.domain.payment.mapper;

import codestates.frogroup.indiego.domain.payment.dto.PaymentFailDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PaymentMapper {

    default PaymentFailDto createPaymentFailDto(String code, String message, String orderId) {
        return PaymentFailDto.builder()
                .errorCode(code)
                .errorMessage(message)
                .orderId(orderId)
                .build();
    }
}
