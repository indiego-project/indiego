package codestates.frogroup.indiego.global.security.auth.handler;

import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ErrorResponse;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import org.springframework.http.MediaType;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ExceptionHandlerFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            filterChain.doFilter(request, response);
        }catch (ExpiredJwtException e){
            //토큰의 유효기간 만료
            setErrorResponse(response, ExceptionCode.TOKEN_EXPIRED);
        }catch (JwtException | IllegalArgumentException e){
            //유효하지 않은 토큰
            setErrorResponse(response, ExceptionCode.TOKEN_INVALID);
        }catch (BusinessLogicException e){
            if(e.getExceptionCode() == ExceptionCode.MEMBER_NO_PERMISSION){
                setErrorResponse(response, ExceptionCode.MEMBER_NO_PERMISSION);
            }else if(e.getExceptionCode() == ExceptionCode.MEMBER_NOT_FOUND){
                setErrorResponse(response, ExceptionCode.MEMBER_NOT_FOUND);
            }else{
                setErrorResponse(response, ExceptionCode.NO_ACCESS_TOKEN);
            }

        }catch (NullPointerException e){
            setErrorResponse(response, ExceptionCode.NULL_POINT_EXCEPTION);
        }
    }

    private void setErrorResponse(
            HttpServletResponse response,
            ExceptionCode errorCode
    ){
        ObjectMapper objectMapper = new ObjectMapper();
        response.setStatus(errorCode.getStatus());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        ErrorResponse errorResponse =ErrorResponse.of(errorCode);
        try{
            response.getWriter().write(objectMapper.writeValueAsString(errorResponse));
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
