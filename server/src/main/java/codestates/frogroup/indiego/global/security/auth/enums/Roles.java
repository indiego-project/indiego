package codestates.frogroup.indiego.global.security.auth.enums;

import lombok.Getter;

@Getter
public enum Roles {
    GUEST("GUEST"),
    USER("USER"),
    NON_CERTIFIED_PERFORMER("NON_CERTIFIED_PERFORMER"),
    PERFORMER("PERFORMER"),
    ADMIN("ADMIN");

    private final String role;

    Roles(String role) {
        this.role = role;
    }
}
