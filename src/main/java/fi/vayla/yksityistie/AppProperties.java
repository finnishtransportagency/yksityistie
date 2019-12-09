package fi.vayla.yksityistie;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;

@ConfigurationProperties("recaptcha")
@Data
@Validated
public class AppProperties {
    @NotBlank
    private String secret;
    private String proxy;
}
