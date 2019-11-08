package fi.vayla.yksityistie.service;

import fi.vayla.yksityistie.model.GoogleResponse;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

public class ReCAPTCHAService {

    public boolean validateOnGoogleAPI(String secret, String response){
        URI verifyUri = URI.create(String.format(
                "https://www.google.com/recaptcha/api/siteverify?secret=%s&response=%s",
                secret, response));

        RestTemplate restTemplate = new RestTemplate();
        GoogleResponse googleResponse = restTemplate.getForObject(verifyUri, GoogleResponse.class);

        return googleResponse.isSuccess();
    }
}
