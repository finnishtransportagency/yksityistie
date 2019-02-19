package fi.vayla.yksityistie;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/*import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;*/

/*import org.apache.log4j.Logger;*/


@RestController
/*@Api(tags= "Yksityistie REST API")*/
public class YksityistieController {
	
	/*private static Logger log = Logger.getLogger(GeoCodeClient.class);*/
	
	@Autowired 
	private YksityistieRepository items;
	
	/**
	 * REST API using HTTP POST
	 * @param
	 * @return 
	 */
	/*@ApiOperation(value = "getTest", nickname = "getTestApi")*/
 	@RequestMapping(value = "/testapi", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<String> testapi(){
		log.info("START! getByCoords");
		return new ResponseEntity<>(items.getTestApi(), HttpStatus.OK);
	}
	   
	/**
	 * REST API using HTTP POST to send email to stakeholders
	 * 
	 * @param 
	 * @return
	 */
	@RequestMapping(value = "/sendmail", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<String> sendmail(
			@RequestParam(name="osoite", required=true, defaultValue="yksityistie@vayla.fi")
			String type,
    		@RequestBody BodyType podi){
		log.info("Emailing!");
        return new ResponseEntity<>(items.postTestApi(osoite, podi), HttpStatus.CREATED);
    }
}
