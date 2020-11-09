package fi.vayla.yksityistie.service;

import fi.vayla.yksityistie.model.MaintenanceAssociation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;

@Service
public class EmailNotificationService {

	@Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;

    public void sendEmailNotificationToOperator(byte[] pdf, MaintenanceAssociation maintenanceAssociation) throws MailException {
        sendMail("info@digiroad.fi", "operator", pdf, maintenanceAssociation);
    }

    public void sendVerificationEmailToSubmitter(byte[] pdf, MaintenanceAssociation maintenanceAssociation)  {
        sendMail(maintenanceAssociation.getEmail(), "submitter", pdf, maintenanceAssociation);

    }

    private void sendMail(String to, String template, byte[] pdf, MaintenanceAssociation maintenanceAssociation){
        MimeMessage mail = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(mail,
                    MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());

            Context context = new Context();

            ObjectMapper mapObject = new ObjectMapper();
            Map < String, Object > variables = mapObject.convertValue(maintenanceAssociation, Map.class);

            context.setVariables(variables);

            String html = templateEngine.process(template, context);

            helper.setTo(to);
            helper.setFrom("info@digiroad.fi");

            if (template.equals("submitter")) {
                helper.setSubject("Kiitos yksityistieilmoituksesta");
            } else {
                helper.setSubject("Uusi yksityistielomake: " + maintenanceAssociation.getAssociationName());
            }
            helper.setText(html, true);

            // adding pdf attachment
            ByteArrayDataSource attachment = new ByteArrayDataSource(pdf, "application/pdf");
            helper.addAttachment("Digiroad_tosite.pdf", attachment);

            javaMailSender.send(mail);


        } catch (Exception exeption){
            //
            exeption.printStackTrace();
        }
    }

}
