package dim.livi.digiroad.reporttool;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import dim.livi.digiroad.NisRepository;
import dim.livi.digiroad.c3jsData;
import dim.livi.digiroad.IdText;
//import dim.livi.digiroad.jsonMessage;
import dim.livi.digiroad.rawModifiedResult;
import dim.livi.digiroad.MiddleLayer;

@RestController
public class ReportController {
	
	@Autowired
	private NisRepository items;

	@RequestMapping(value = "/koodistot/tietolajit", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<List<IdText>> tietolajit(@RequestParam String q) {
		return new ResponseEntity<List<IdText>>(items.getAssetTypes(q), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/koodistot/kunnat", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<List<IdText>> kunnat(@RequestParam String q) {
		return new ResponseEntity<List<IdText>>(items.getMunicipalitys(q), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/koodistot/hallinnollinenluokka", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<List<IdText>> hallinnollinenluokka(@RequestParam String q) {
		return new ResponseEntity<List<IdText>>(items.getAdminClass(q), HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/raportit/graafi1/{startdate}/{stopdate}/{kunnat}/{tietolajit}/{hallinnollinenluokka}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<c3jsData> chart1(@PathVariable String startdate, @PathVariable String stopdate, @PathVariable String kunnat, @PathVariable String tietolajit, @PathVariable String hallinnollinenluokka) throws InterruptedException, ExecutionException {
		MiddleLayer mid = new MiddleLayer();
		final Future<ArrayList<rawModifiedResult>> future = items.getRawModifiedResult(kunnat, tietolajit, hallinnollinenluokka);
		final Future<Integer> futureAll = items.getAllCount(kunnat, tietolajit);
		while (!future.isDone() || !futureAll.isDone()) {
			Thread.sleep(500L);
        }
		c3jsData chartData = mid.buildC3JsChartData(startdate, stopdate, mid.createArrayCombinations(kunnat, tietolajit),future.get(), futureAll.get());
		chartData.setGroups(mid.createGroups(kunnat, tietolajit));
		chartData.setCategories(mid.getGategories().toArray(new String[0]));
		return new ResponseEntity<c3jsData>(chartData, HttpStatus.OK);
	}	
}

