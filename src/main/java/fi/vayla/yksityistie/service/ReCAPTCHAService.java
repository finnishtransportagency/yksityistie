package fi.vayla.yksityistie.service;

import fi.vayla.yksityistie.model.GoogleResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.net.*;

@Service
public class ReCAPTCHAService {

    private String secret;
    private String proxy;

    public ReCAPTCHAService( @Value("${recaptcha.secret}") String secret, @Value("${recaptcha.proxy}") String proxy) {
        this.secret = secret;
        this.proxy = proxy;
    }

    public boolean validateOnGoogleAPI(String response)  {
        URI verifyUri = URI.create(String.format(
                "https://www.google.com/recaptcha/api/siteverify?secret=%s&response=%s",
                secret, response));

        // Setting up a proxy for connecting to third party services from Väylä's servers

        RestTemplate restTemplate = createRestTemplate();

        GoogleResponse googleResponse = restTemplate.getForObject(verifyUri, GoogleResponse.class);

        assert googleResponse != null;
        return googleResponse.isSuccess();
    }

    private RestTemplate createRestTemplate() {
        SimpleClientHttpRequestFactory clientHttpReq = new SimpleClientHttpRequestFactory();

        if (!proxy.equals("NO_PROXY")) {

            URL url = null;
            try {
                url = new URL(proxy);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

            // Current jenkins CI/CD inserts proxy as a string hence error handling and port defaults to 80;
            assert url != null;
            int port = url.getPort() != -1 ? url.getPort() : 80;

            Proxy proxy_setter = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(url.getHost(), port));
            clientHttpReq.setProxy(proxy_setter);

        }
        return new RestTemplate(clientHttpReq);
    }

}
