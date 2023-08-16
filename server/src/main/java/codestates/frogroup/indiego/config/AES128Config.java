package codestates.frogroup.indiego.config;

import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

@Component
public class AES128Config {

    @Value("${aes.secret-key}")
    private String secretKey;
    private byte[] key; // 16,24,32 byte 중 고정

    @PostConstruct
    public void init(){
        this.key = secretKey.substring(0,16).getBytes();
    }

    // AES 암호화
    public String encryptAes(String str) {
        try {
            Cipher cipher = Cipher.getInstance("AES");
            SecretKeySpec secretKey = new SecretKeySpec(key,"AES");
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
            byte[] encPassword = cipher.doFinal(str.getBytes("UTF-8"));
            return Base64.getEncoder().encodeToString(encPassword);
        } catch (Exception e){
            throw new BusinessLogicException(ExceptionCode.ENCRYPTION_FAIED);
        }
    }

    // AES 복호화
    public String decryptAes(String str) {
        try {
            Cipher cipher = Cipher.getInstance("AES");
            SecretKeySpec secretKey = new SecretKeySpec(key, "AES");
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            byte[] decPassword = cipher.doFinal(Base64.getDecoder().decode(str));
            return new String(decPassword, "UTF-8");
        } catch (Exception e){
            throw new BusinessLogicException(ExceptionCode.DECRYPTION_FAIED);
        }
    }
}
