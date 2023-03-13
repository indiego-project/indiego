package codestates.frogroup.indiego.global.security.auth.utils;

import codestates.frogroup.indiego.domain.member.dto.MemberDto;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ErrorResponse;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.security.auth.userdetails.AuthMember;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Responder {
    public static void sendErrorResponse(HttpServletResponse response, HttpStatus status) throws IOException {
        Gson gson = new Gson();
        ErrorResponse errorResponse = ErrorResponse.of(status);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }

    public static void sendErrorResponse(HttpServletResponse response, ExceptionCode code) {
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        throw new BusinessLogicException(code);
    }

    public static void loginSuccessResponse(HttpServletResponse response, Member member) throws IOException {
        Gson gson = new Gson();
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        MemberDto.LoginResponse loginResponse = MemberDto.LoginResponse.builder()
                .id(member.getId())
                .email(member.getEmail())
                .nickname(member.getProfile().getNickname())
                .role(member.getRoles().get(0))
                .build();

        response.getWriter().write(gson.toJson(new SingleResponseDto<>(loginResponse),SingleResponseDto.class));
    }

}
