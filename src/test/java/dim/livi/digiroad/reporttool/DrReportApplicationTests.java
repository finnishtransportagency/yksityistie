package dim.livi.digiroad.reporttool;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.Before;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import java.util.ArrayList;
import java.util.List;
import dim.livi.digiroad.IdText;
import dim.livi.digiroad.NisRepository;
import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = DrReportApplication.class)
@WebAppConfiguration
public class DrReportApplicationTests {

	@Mock
	private NisRepository items;
	@Before
	public void setup(){
		MockitoAnnotations.initMocks(this);
}
	@Test
	public void testGetAdminClass(){	
		List<IdText> result = new ArrayList<IdText>();
		when(items.getAdminClass("Sa")).thenCallRealMethod();
		result = items.getAdminClass("Sa");
		assertEquals(4, result.size());
	}
	
	@Test
	public void testGetMunicipalitys(){
		List<IdText> toDoList = new ArrayList<IdText>();
		toDoList.add(new IdText(1,"Saana"));
		toDoList.add(new IdText(734,"Salo"));
		toDoList.add(new IdText(3,"Salla"));
		when(items.getMunicipalitys("Sa")).thenReturn(toDoList);
		List<IdText> result = items.getMunicipalitys("Sa");
		assertEquals(3, result.size());
	}
	
	@Test
	public void testGetAssetTypes(){
		List<IdText> toDoList = new ArrayList<IdText>();
		toDoList.add(new IdText(1,"Saana"));
		toDoList.add(new IdText(734,"Salo"));
		toDoList.add(new IdText(3,"Salla"));
		when(items.getAssetTypes("Sa")).thenReturn(toDoList);
		List<IdText> result = items.getAssetTypes("Sa");
		assertEquals(3, result.size());
	}

}
