package codestates.frogroup.indiego.global.security.auth.loginresolver;

import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.security.auth.userdetails.AuthMember;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

/*
 * WebConfig에서 addArgumentResolvers(); 메서드에 추가할 것
 * */
public class LoginMemberEmailResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter parameter) {

        boolean hasLoginMemberEmailAnnotation = parameter.hasParameterAnnotation(LoginMemberEmail.class);
        boolean hasLongType = String.class.isAssignableFrom(parameter.getParameterType());
        return hasLoginMemberEmailAnnotation && hasLongType;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
                                  NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal == "anonymousUser") {
            throw new BusinessLogicException(ExceptionCode.ANONYMOUS_USER);
            // return -1L;
        }

        AuthMember castedPrincipal = (AuthMember) principal;

        return castedPrincipal.getEmail();
    }
}
