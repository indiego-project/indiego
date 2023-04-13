package codestates.frogroup.indiego.global.exception;

import lombok.Getter;

public enum ExceptionCode {
    // MEMBER
    MEMBER_IS_NOT_SAME(400, "Member is not the same"),
    MEMBER_ROLE_DOES_NOT_HAVE(403, "The role doesn't have."),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    MEMBER_NO_PERMISSION(406, "권한이 없습니다."),

    // JWT, 인증관련
    ACCESS_TOKEN_NOT_FOUND(404,"Access Token을 찾을 수 없습니다."),
    REFRESH_TOKEN_NOT_FOUND(404,"Refresh Token을 찾을 수 없습니다."),
    HEADER_REFRESH_TOKEN_NOT_FOUND(404,"Header 정보에 Refresh Token 정보가 없습니다."),
    TOKEN_IS_NOT_SAME(404,"Refresh Token과 발급된 Access Token 정보가 일치하지 않습니다."),
    NO_ACCESS_TOKEN(403, "권한 정보가 없는 토큰입니다."),
    TOKEN_EXPIRED(400, "Token Expired"),
    TOKEN_INVALID(400, "Token Invalid"),
    TOKEN_SIGNATURE_INVALID(400, "Token Signature Invalid"),
    TOKEN_MALFORMED(400, "Token Malformed"),
    TOKEN_UNSUPPORTED(400, "Token Unsupported"),
    TOKEN_ILLEGAL_ARGUMENT(400, "Token Illegal Argument"),
    ANONYMOUS_USER(404, "Anonymous User"),
    TOKEN_DELETE_FAIL(400, "Refresh Token 삭제를 실패하였습니다."),

    // ARITCLE
    ARTICLE_NOT_FOUND(404, "게시글을 찾을 수 없습니다."),
    ARTICLE_COMMENT_NOT_FOUND(404, "해당 게시글의 댓글을 찾을 수 없습니다."),
    ARTICLE_GET_BAD_REQUEST(400, "게시글 조회에 대한 잘못된 요청입니다."),

    SHOW_NOT_FOUND(404, "Show not found"),

    SHOW_COMMENT_NOT_FOUND(404, "Show Comment not found"),
    SHOW_COMMENT_IS_NOT_SAME(404, "Show Comment is not same the Comment of Show"),
    SHOW_COMMENT_EXIST(403, "후기를 이미 작성하셨습니다."),

    BOOKMARK_NOT_FOUND(404, "북마크가 존재하지 않습니다."),

    SHOW_RESERVATION_NOT_FOUND(403, "후기를 작성할 수 있는 권한이 없습니다."),
    SHOW_RESERVATION_CREATE_FAIL(400,"재고가 부족합니다."),



    // File Upload
    UPLOAD_FAILED(404, "File Upload Failed !"),
    UPLOAD_VOLUME_OVER(404, "File Size가 10MB를 초과하였습니다 !"),

    // AES
    ENCRYPTION_FAIED(404, "암호화에 실패하였습니다."),
    DECRYPTION_FAIED(404, "복호화에 실패하였습니다."),

    //Certification
    PERFORMER_ADD_FAILED(404, "퍼포머 인증에 실패했습니다."),
    CERTIFICATION_REMOVE_FAILED(404, "퍼포퍼 인증 요청 삭제에 실패했습니다"),
    CERTIFICATION_NOT_FOUND(404, "퍼포머 인증이 존재하지 않습니다."),

    //security
    NULL_POINT_EXCEPTION(400, "데이터값을 확인하세요.");
    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
