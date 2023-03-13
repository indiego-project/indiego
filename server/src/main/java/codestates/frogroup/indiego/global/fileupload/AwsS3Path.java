package codestates.frogroup.indiego.global.fileupload;

import lombok.Getter;

public enum AwsS3Path {
    SHOWS("/shows"),
    ARTICLES("/articles"),
    PROFILEIMAGE("/profileimage");

    @Getter
    private String path;

    AwsS3Path(String path) {
        this.path = path;
    }

}
