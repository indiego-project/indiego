package codestates.frogroup.indiego.domain.show.entity;

import codestates.frogroup.indiego.domain.common.embedding.Board;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import java.time.LocalDate;

@Getter
@Setter
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class ShowBoard {

    @Embedded
    private Board board;

    @Column(nullable = false)
    private Integer price;

    @Column(length = 100, nullable = false)
    private String address;

    @Column
    private String detailAddress;

    @Column(nullable = false)
    private LocalDate expiredAt; // 만료날짜

    @Column(nullable = false)
    private LocalDate showAt; // 공연날짜

    @Column
    private String showTime;

    @Column(columnDefinition = "TEXT")
    private String detailDescription;

}
