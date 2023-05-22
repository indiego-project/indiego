package codestates.frogroup.indiego.global.exception;

import graphql.ErrorClassification;
import graphql.GraphQLError;
import graphql.language.SourceLocation;
import lombok.Getter;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * ExceptionCode 를 생성자를 통해 받아와서 더 구체적인 예외 정보들을 제공
 * 상위 클래스 RuntimeException 의 생성자(super)로 예외 메시지 전달
 * -> 의도적으로 예외를 던져야 하는 다양한 상황에서 ExceptionCode 정보만 바꿔가며 던질 수 있다.
 */

public class BusinessLogicException extends RuntimeException implements GraphQLError {
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }

    @Override
    public List<SourceLocation> getLocations() {
        return null;
    }

    @Override
    public ErrorClassification getErrorType() {
        return null;
    }

    @Override
    public Map<String, Object> getExtensions() {
        Map<String, Object> customAttributes = new LinkedHashMap<>();
        customAttributes.put("status", exceptionCode.getStatus());
        customAttributes.put("exceptionMessage", exceptionCode.getMessage());
        return customAttributes;
    }
}

// service 에서 throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);의 형식으로 끝에 추가
