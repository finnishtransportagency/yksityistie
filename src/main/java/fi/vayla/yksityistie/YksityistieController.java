package fi.vayla.yksityistie;

import java.io.ByteArrayInputStream;
//import java.io.ByteArrayOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.InputStreamResource;
/*import org.apache.log4j.Logger;*/


@RestController
public class YksityistieController {
	
	/*private static Logger log = Logger.getLogger(GeoCodeClient.class);*/
	
	@Autowired 
	private YksityistieRepository items;
		   
	
	/**
	 * REST API using HTTP POST to send email to stakeholders
	 * 
	 * @param body contains Json format form data
	 * @return
	 */
	@RequestMapping(value = "/sendmail", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)//, produces = MediaType.APPLICATION_PDF_VALUE)
	public ResponseEntity<InputStreamResource> sendmail(
			@RequestBody YksityistieFormClass form){
		    ByteArrayInputStream response = items.handleForm(form);
		    if(response.available()>0){
        	HttpHeaders headers = new HttpHeaders();
        	headers.add("Content-Disposition", "attachment; filename=yksityistie.pdf");
        	return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(response));
        	} else {
        		HttpHeaders headers = new HttpHeaders();
            	headers.add("Content-Disposition", "attachment; filename=yksityistie.pdf");
        		return ResponseEntity
                        .ok()
                        .headers(headers)
                        .contentType(MediaType.APPLICATION_PDF)
                        .body(new InputStreamResource(response));
        	}
    }
}
