package codestates.frogroup.indiego.global.email.event;

import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.email.EmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.mail.MailSendException;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@EnableAsync
@Configuration
@RequiredArgsConstructor
public class MemberRegistrationEventListener {

    @Value("${mail.subject.member.registration}")
    private String subject;

    @Value("${mail.template.name.member.join}")
    private String templateName;

    private final EmailService emailService;
    private final MemberService memberService;

    @Async
    @EventListener
    public void listen(MemberRegistrationApplicationEvent event) throws Exception {

        try {

            String[] to = new String[]{event.getMember().getEmail()};
            String message = event.getMember().getProfile().getNickname() + "님, 회원가입이 성공적으로 완료되었습니다.";
            emailService.sendEmail(to, subject, message, templateName);

        } catch (MailSendException e) {

            log.error("이메일 보내기에 실패하였습니다.");
            memberService.emailVerifyFailed(event.getMember().getId());
        }
    }
}
