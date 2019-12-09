package fi.vayla.yksityistie.service;

import fi.vayla.yksityistie.model.GoogleResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.net.URI;

@Service
public class ReCAPTCHAService {

    private String secret;
    private String proxy;

    public ReCAPTCHAService( @Value("${recaptcha.secret}") String secret, @Value("${recaptcha.proxy}") String proxy)  {
        this.secret = secret;
        this.proxy = proxy;
    }

    public boolean validateOnGoogleAPI(String response){
        URI verifyUri = URI.create(String.format(
                "https://www.google.com/recaptcha/api/siteverify?secret=%s&response=%s",
                secret, response));

        RestTemplate restTemplate = new RestTemplate();
        GoogleResponse googleResponse = restTemplate.getForObject(verifyUri, GoogleResponse.class);

        return googleResponse.isSuccess();
    }

    public void testEnvironment(){
        System.out.println("reCAPTCHA: { secret: " + secret + ", proxy: " + proxy + " }");
    }

}
