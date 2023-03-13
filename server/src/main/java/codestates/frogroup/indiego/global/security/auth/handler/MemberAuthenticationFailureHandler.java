package codestates.frogroup.indiego.global.security.auth.handler;

import codestates.frogroup.indiego.global.security.auth.utils.Responder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException {
        log.error("# Authentication failed: {}", exception.getMessage());
        Responder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
    }
}
