package codestates.frogroup.indiego.domain.common.embedding;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;

@Getter
@Setter
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Coordinate {

    private Double latitude;

    private Double longitude;

}
