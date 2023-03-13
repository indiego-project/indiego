package codestates.frogroup.indiego.global.email;

import org.springframework.stereotype.Component;

@Component
public interface EmailSend {

    void send(String[] to, String subject, String message, String templateName) throws InterruptedException;
}
