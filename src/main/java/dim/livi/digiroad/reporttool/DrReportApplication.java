package dim.livi.digiroad.reporttool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

import dim.livi.digiroad.NisRepository;

//@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackageClasses={NisRepository.class})
//@ComponentScan("dim.livi.digiroad")
@EnableScheduling
@EnableAsync
public class DrReportApplication extends org.springframework.boot.context.web.SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(DrReportApplication.class, args);
	}
	/**
	 * Configuration override needed for successful WAR deployment  
	 */
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(DrReportApplication.class);
    }
}
