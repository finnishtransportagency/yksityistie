package fi.vayla.yksityistie.service;

import fi.vayla.yksityistie.model.MaintenanceAssociation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;

@Service
public class EmailNotificationService {

    private JavaMailSender javaMailSender;
    private String operatorEmail;

    @Autowired
    public EmailNotificationService(JavaMailSender javaMailSender, @Value("${operator.email}") String operatorEmail) {
        this.javaMailSender = javaMailSender;
        this.operatorEmail = operatorEmail;
    }

    public void sendEmailNotificationToOperator(MaintenanceAssociation maintenanceAssociation) throws MailException {
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(operatorEmail);
            mail.setFrom("info@digiroad.fi");

            mail.setSubject("Uusi yksitystielomake: " + maintenanceAssociation.getTiekunta());
            mail.setText(maintenanceAssociation.toString());

            javaMailSender.send(mail);
        } catch (Exception exeception){
            exeception.printStackTrace();
        }
    }

    public void sendVerificationEmailToSubmitter(byte[] pdf, MaintenanceAssociation maintenanceAssociation)  {
        MimeMessage mail = javaMailSender.createMimeMessage();

        String messageBody = "Kiitos yksityistien tietojen toimittamisesta Väylän Digiroad-järjestelmään. Olemme vastaanottaneet ilmoituksen. \n\n" +
                "Tarkistathan tämän viestin lopusta, että ilmoittamasi tiedot ovat oikein. Jos havaitset virheitä ilmoituksessa, voit lähettää " +
                " korjauksen vastaamalla tähän sähköpostiviestiin tai täyttämällä ilmoituslomakkeen uudelleen osoiteessa vayla.fi/yksityistiet . \n\n" +
                "Ilmoitetut rajoitustiedot viedään osaksi Digiroad-aineistoa mahdollisimman pian ja tiedot tuleva näkyviin karttapalveluun noin 2 viikon kuluessa ilmoituksesta. \n\n\n\n" +
                "Oikein hyvää jatkoa! \n\n" +
                "Ystävällisin terveisin, \n" +
                "Digiroad-operaattori \n" +
                "040 507 2301 \n" +
                "info@digiroad.fi \n" +
                "vayla.fi/digiroad \n\n\n\n" +
                "Ilmoitetut yksityistien tiedot: \n\n";


        try {

            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo(maintenanceAssociation.getEmail());
            helper.setFrom("info@digiroad.fi");
            helper.setSubject("Tosite yksityistietietojen ilmoituksesta Digiroad-järjestelmään, " + maintenanceAssociation.getTiekunta());
            helper.setText(messageBody + maintenanceAssociation.toString());

            // adding pdf attachment
            ByteArrayDataSource attachment = new ByteArrayDataSource(pdf, "application/pdf");
            helper.addAttachment("Digiroad_tosite.pdf", attachment);

            javaMailSender.send(mail);

        } catch (Exception exeption){
            //
        }

    }

}

