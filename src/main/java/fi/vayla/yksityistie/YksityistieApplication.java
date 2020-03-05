package fi.vayla.yksityistie;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
public class YksityistieApplication {

    public static void main(String[] args) {
    	System.out.println("Hello");
        SpringApplication.run(YksityistieApplication.class, args);
    }

}
