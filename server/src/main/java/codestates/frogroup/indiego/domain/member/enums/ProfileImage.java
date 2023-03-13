package codestates.frogroup.indiego.domain.member.enums;

import lombok.Getter;

public enum ProfileImage {
    BASIC_IMAGE_ONE(1,"https://indiego-fileupload.s3.ap-northeast-2.amazonaws.com/profileimage/basic/0916395d-1e05-42d2-b50b-2fa5d58aa45e.jpg"),
    BASIC_IMAGE_TWO(2,"https://indiego-fileupload.s3.ap-northeast-2.amazonaws.com/profileimage/basic/67c070c0-93ac-4f04-9dbe-0118197b00f0.jpg"),
    BASIC_IMAGE_THREE(3,"https://indiego-fileupload.s3.ap-northeast-2.amazonaws.com/profileimage/basic/84777d2b-8b69-48c2-911c-c0c5b2f90fad.jpg"),
    BASIC_IMAGE_FOUR(4,"https://indiego-fileupload.s3.ap-northeast-2.amazonaws.com/profileimage/basic/e4d3d3d8-ac6b-4dfa-a581-58d8b99af46b.jpg"),
    BASIC_IMAGE_FIVE(5,"https://indiego-fileupload.s3.ap-northeast-2.amazonaws.com/profileimage/basic/e5768574-948e-48a7-b015-a0d9ea4cfe83.jpg"),
    BASIC_IMAGE_SIX(6,"https://indiego-fileupload.s3.ap-northeast-2.amazonaws.com/profileimage/basic/ef23514a-6f29-4583-a6e6-6fb9ce29c8dc.jpg"),
    BASIC_IMAGE_SEVEN(7,"https://indiego-fileupload.s3.ap-northeast-2.amazonaws.com/profileimage/basic/fa13ae0a-f8a5-48a1-8fd1-3ab34dff896a.jpg");

    @Getter
    int index;
    @Getter
    private String url;

    ProfileImage(int index, String url) {
        this.index = index;
        this.url = url;
    }
}
