package codestates.frogroup.indiego.global.security.auth.userdetails;

import codestates.frogroup.indiego.domain.member.entity.Member;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.stream.Collectors;


@Getter
public class AuthMember extends Member implements UserDetails {

    private Long id;
    private String email;
    private String password;
    private List<String> roles;

    private AuthMember(Member member) {
        this.id = member.getId();
        this.email = member.getEmail();
        this.password = member.getPassword();
        this.roles = member.getRoles();
    }

    private AuthMember(Long id, String email, List<String> roles) {
        this.id = id;
        this.email = email;
        this.password = "";
        this.roles = roles;
    }

    public static AuthMember of(Member member) {
        return new AuthMember(member);
    }

    public static AuthMember of(Long id, String email, List<String> roles) {
        return new AuthMember(id, email, roles);
    }

    @Override
    public List<GrantedAuthority> getAuthorities() {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
