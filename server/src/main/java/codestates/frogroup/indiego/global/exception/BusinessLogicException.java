package codestates.frogroup.indiego.global.exception;

import lombok.Getter;

/**
 * ExceptionCode 를 생성자를 통해 받아와서 더 구체적인 예외 정보들을 제공
 * 상위 클래스 RuntimeException 의 생성자(super)로 예외 메시지 전달
 * -> 의도적으로 예외를 던져야 하는 다양한 상황에서 ExceptionCode 정보만 바꿔가며 던질 수 있다.
 */

public class BusinessLogicException extends RuntimeException{
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}

// service 에서 throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);의 형식으로 끝에 추가
