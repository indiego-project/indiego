package codestates.frogroup.indiego.global.security.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/*
 * 토큰 Dto로 받을 클래스 -> 사용 유무는 자유
 * 현재는 id와 email을 받을 수 있도록 설정
 * */
@Getter
@Setter
@AllArgsConstructor
public class TokenPrincipalDto {
    private long id;
    private String email;
}
