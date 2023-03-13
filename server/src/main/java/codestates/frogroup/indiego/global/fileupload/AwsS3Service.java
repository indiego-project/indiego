package codestates.frogroup.indiego.global.fileupload;

import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class AwsS3Service implements ImageUploadService {

	private final AmazonS3 amazonS3;

	@Value("${cloud.aws.s3.bucket}")
	private String bucketName;

	public String StoreImage(MultipartFile file, AwsS3Path awsS3Path) {

		if (file.isEmpty()) {
			throw new BusinessLogicException(ExceptionCode.UPLOAD_FAILED);
		}

		String originalFilename = file.getOriginalFilename();
		String storeFileName = createStoreFileName(originalFilename);

		log.info("# originalFilename = {}", originalFilename);
		log.info("# storeFileName = {}", storeFileName);

		try (InputStream inputStream = file.getInputStream()) {
			amazonS3.putObject(new PutObjectRequest(bucketName + awsS3Path.getPath(), storeFileName, inputStream, null)
				.withCannedAcl(CannedAccessControlList.PublicRead));
		} catch (IOException e) {
			throw new BusinessLogicException(ExceptionCode.UPLOAD_FAILED);
		}

		return amazonS3.getUrl(bucketName + awsS3Path.getPath(), storeFileName).toString();
	}

	private static String createStoreFileName(String originalFilename) {
		return UUID.randomUUID().toString() + "." + extractExt(originalFilename);
	}

	private static String extractExt(String originalFilename) {
		return originalFilename.substring(originalFilename.lastIndexOf(".") + 1);
	}
}
