package fi.vayla.yksityistie;

/*import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.log4j.Logger;
import org.geojson.Crs;
import org.geojson.Feature;
import org.geojson.FeatureCollection;
import org.geojson.GeoJsonObject;
import org.geojson.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.UncategorizedSQLException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.jdbc.core.RowMapperResultSetExtractor;
*/
@Repository
public class YksityistieRepository {
	
	/*Somekind of mail setup procedure instance*/
	protected MailTemplate sposti;
	@Autowired
	public YksityistieRepository(MailTemplate sposti) {
		this.sposti = sposti;
	}

	/**
	 * This creates a response
	 * @param
	 * @return
	 */
	public String postTestApi(String osoite, BodyType podi){
		return ("Post Hello World!");
	}

	/**
	 * This creates a Test
	 * 
	 * @param 
	 * @return 
	 */
	public FeatureCollection getTestApi() {
		return ("Get Hello World!");
	};
}
