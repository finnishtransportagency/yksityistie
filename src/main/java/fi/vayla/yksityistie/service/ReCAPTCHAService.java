package fi.vayla.yksityistie.service;

import fi.vayla.yksityistie.model.GoogleResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.net.InetSocketAddress;
import java.net.Proxy;
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

        // Setting up a proxy for connecting to third party services from Väylä's servers
        SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();
        InetSocketAddress address = new InetSocketAddress(proxy, 80);
        Proxy proxy_service = new Proxy(Proxy.Type.HTTP,address);
        requestFactory.setProxy(proxy_service);

        // Actuall http-client
        RestTemplate restTemplate = new RestTemplate(requestFactory);

        GoogleResponse googleResponse = restTemplate.getForObject(verifyUri, GoogleResponse.class);

        assert googleResponse != null;
        return googleResponse.isSuccess();
    }

    public void testEnvironment(){
        System.out.println("reCAPTCHA: { secret: " + secret + ", proxy: " + proxy + " }");
    }

}
