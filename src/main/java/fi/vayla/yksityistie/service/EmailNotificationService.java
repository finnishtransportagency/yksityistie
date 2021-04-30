package fi.vayla.yksityistie.service;

import fi.vayla.yksityistie.model.MaintenanceAssociation;
import fi.vayla.yksityistie.model.PrivateRoad;
import fi.vayla.yksityistie.model.Screenshot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.Base64;

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

            helper.setSubject("Kiitos yksityistieilmoituksesta: "  + maintenanceAssociation.getAssociationName());

            helper.setText(html, true);

            // adding pdf attachment
            ByteArrayDataSource attachment = new ByteArrayDataSource(pdf, "application/pdf");
            helper.addAttachment("Digiroad_tosite.pdf", attachment);

            // add screenshots
            List<Screenshot> screenshots = maintenanceAssociation.getScreenshots();
            for (int i = 0; i < screenshots.size(); i++) {
                String imgStr = screenshots.get(i).getImage().split(",")[1];
                byte[] img = Base64.getDecoder().decode(imgStr.getBytes("UTF-8"));
                helper.addAttachment(String.format("screenshot_%d.png", i+1), new ByteArrayDataSource(img, "image/png"));
            }
            

            javaMailSender.send(mail);


        } catch (Exception exeption){
            //
            exeption.printStackTrace();
        }
    }

}
