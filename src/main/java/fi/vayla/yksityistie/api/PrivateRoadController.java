package fi.vayla.yksityistie.api;


import fi.vayla.yksityistie.model.MaintenanceAssociation;
import fi.vayla.yksityistie.service.EmailNotificationService;
import fi.vayla.yksityistie.service.PDFService;
import fi.vayla.yksityistie.service.ReCAPTCHAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;


@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000", "https://kehitysjulkinen.vayla.fi"}, maxAge = 3600)
@RequestMapping(value = "api/v1/privateroad", consumes = "application/json", produces="application/json")
@RestController
public class PrivateRoadController {
    private final PDFService pdfServise = new PDFService();

    @Autowired
    private EmailNotificationService emailNotificationService;

    @Autowired
    private ReCAPTCHAService reCAPTCHAService;

    @PostMapping
    public ResponseEntity<InputStreamResource> addPrivateRoad(
            @RequestBody MaintenanceAssociation maintenanceAssociation,
            @RequestHeader("g-recaptcha-response") String response
            ){

        boolean isSuccess = reCAPTCHAService.validateOnGoogleAPI(response);


        if(!isSuccess){
            String message = "message: reCAPTCHA Validation failure";
            InputStreamResource body = new InputStreamResource(new ByteArrayInputStream(message.getBytes()));
            return new ResponseEntity<>(body,HttpStatus.BAD_REQUEST);
        }

        byte[] pdf = new byte[0];

        try {
            pdf = pdfServise.createPdf(maintenanceAssociation);
        } catch (Exception e) {
          //exeption
            e.printStackTrace();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);


        ContentDisposition contentDisposition = ContentDisposition.builder("inline")
                .filename("Digiroad_tosite.pdf")
                .build();

        headers.setContentDisposition(contentDisposition);
        headers.getAccessControlExposeHeaders();


        try {
            emailNotificationService.sendEmailNotificationToOperator(maintenanceAssociation);
        } catch (MailException e){
            // catch error
        }

        switch (maintenanceAssociation.getToimitusTapa()){
            case "emailAndDownload":
                emailNotificationService.sendVerificationEmailToSubmitter(pdf, maintenanceAssociation);
                return new ResponseEntity<>(new InputStreamResource(new ByteArrayInputStream(pdf)), headers, HttpStatus.OK);
            case "email":
                emailNotificationService.sendVerificationEmailToSubmitter(pdf, maintenanceAssociation);
                return new ResponseEntity<>(HttpStatus.OK);
            case "download":
                return new ResponseEntity<>(new InputStreamResource(new ByteArrayInputStream(pdf)), headers, HttpStatus.OK);
            default:
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

}
