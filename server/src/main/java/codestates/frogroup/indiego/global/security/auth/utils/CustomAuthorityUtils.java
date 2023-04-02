package codestates.frogroup.indiego.global.security.auth.utils;

import codestates.frogroup.indiego.global.security.auth.enums.Roles;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {
    private String adminMailAddress = "admin@google.com";

    private final List<String> GUEST_ROLES_STRING = List.of("GUEST");
    private final List<String> USER_ROLES_STRING = List.of("USER");
    private final List<String> PERFORMER_ROLES_STRING = List.of("PERFORMER", "USER");
    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "USER");
    private final List<String> NON_CERTIFIED_PERFORMER_ROLES_STRING = List.of("NON_CERTIFIED_PERFORMER", "USER");


    // DB에 저장된 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }

    // DB 저장 용
    public List<String> createRoles(String role) {
        if (role.equals(Roles.ADMIN.toString())) {
            return ADMIN_ROLES_STRING;
        } else if(role.equals(Roles.PERFORMER.toString())){
            return PERFORMER_ROLES_STRING;
        }else if(role.equals(Roles.NON_CERTIFIED_PERFORMER.toString())){
            return NON_CERTIFIED_PERFORMER_ROLES_STRING;
        } else if(role.equals(Roles.USER.toString())){
            return USER_ROLES_STRING;
        } else if(role.equals(Roles.GUEST.toString())){
            return GUEST_ROLES_STRING;
        }
        return null;
    }
}
