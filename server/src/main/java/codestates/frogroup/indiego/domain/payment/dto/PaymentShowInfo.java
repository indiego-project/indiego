package codestates.frogroup.indiego.domain.payment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentShowInfo {

    @NotNull
    private Long showId;
    @NotNull
    private LocalDate date;
    @NotNull
    private Integer ticketCount;
}
