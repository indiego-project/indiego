package codestates.frogroup.indiego.global.email;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    private final EmailSend emailSend;

    public void sendEmail(String[] to, String subject, String message, String templateName) throws MailSendException, InterruptedException {
        emailSend.send(to, subject, message, templateName);
    }

}
