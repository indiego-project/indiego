package codestates.frogroup.indiego.global.email;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Slf4j
@RequiredArgsConstructor
public class EmailSendImpl implements EmailSend {

    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;
    private final Context context;

    @Override
    public void send(String[] to, String subject, String message, String templateName) throws InterruptedException {

        try {
            context.setVariable("message", message);

            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");

            String html = templateEngine.process(templateName, context);
            mimeMessageHelper.setTo(to);
            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setText(html, true);

            javaMailSender.send(mimeMessage);
            log.info("템플릿을 사용하여 이메일을 보냈습니다.");

        } catch (MessagingException e) {
            log.error("이메일 보내기에 실패했습니다.", e);
        }
    }

}
