package dim.livi.digiroad;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Future;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.RowMapperResultSetExtractor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Repository;

@Repository
public class NisRepository {
	
	protected JdbcTemplate jdbc;
	
	@Autowired
    public NisRepository(JdbcTemplate jdbc) {
        this.jdbc=jdbc;
    }
	 
	public List<IdText> getAssetTypes(String term) {
		 return jdbc.query("select ID, NAME from DR2USER.ASSET_TYPE where lower(NAME) like lower(?) order by NAME", new Object[]{term + "%"}, new RowMapperResultSetExtractor<IdText>(assetTypeMapper));
	 }
	
	public List<IdText> getMunicipalitys(String term) {
		 return jdbc.query("select ID, NAME_FI from DR2USER.MUNICIPALITY where lower(NAME_FI) like lower(?) order by NAME_FI", new Object[]{term + "%"}, new RowMapperResultSetExtractor<IdText>(MunicipalityMapper));
	 }
	
	public List<IdText> getAdminClass(String term) {
		//nämä pysyvät pitempään, ei implementoitu dynaamiseksi
		ArrayList<IdText> valinnat= new ArrayList<IdText>();
		valinnat.add(new IdText(1,"Valtio"));
		valinnat.add(new IdText(2,"Kunta"));
		valinnat.add(new IdText(3,"Yksityinen"));
		valinnat.add(new IdText(99,"Ei määritelty"));
		return valinnat;
	 }
	
	@Async
	public Future<ArrayList<rawModifiedResult>> getRawModifiedResult(String kunnat, String tietolajit, String hallinnollinenluokka) {
		String tuntematonNopeusrajoitus = (tietolajit.equals("20")) ? "and lrm.LINK_ID not in (select usl.link_id from DR2USER.UNKNOWN_SPEED_LIMIT usl)" : "";/*onko tietolaji nopeusajoitus*/
		 return new AsyncResult<ArrayList<rawModifiedResult>>((ArrayList<rawModifiedResult>) jdbc.query("select MOD_DATE, ASSET_TYPE_ID, NAME, MUNICIPALITYCODE, NAME_FI, count(MOD_DATE) COUNT from ( " +
		  "select ass.ASSET_TYPE_ID, at.NAME, rl.MUNICIPALITYCODE, mu.NAME_FI, to_char(cast(coalesce(ass.MODIFIED_DATE, ass.CREATED_DATE) as date), 'DD-MM-YYYY') MOD_DATE from DR2USER.ASSET ass " +
		  "inner join DR2USER.ASSET_LINK al on ass.ID = al.ASSET_ID " +
		  "inner join DR2USER.LRM_POSITION lrm on al.POSITION_ID = lrm.ID " +
		  "inner join VVH.ROADLINK@VVH rl on lrm.LINK_ID = rl.LINKID " +
		  "inner join DR2USER.MUNICIPALITY mu on rl.MUNICIPALITYCODE = mu.ID " +
		  "inner join DR2USER.ASSET_TYPE at on ass.ASSET_TYPE_ID = at.ID " +
		  "where ass.ASSET_TYPE_ID in (" + tietolajit + ") " +
		  "and rl.MUNICIPALITYCODE in (" + kunnat + ") " +
		  "and rl.ADMINCLASS in (" + hallinnollinenluokka + ") " +
		  ""+ tuntematonNopeusrajoitus +"" +
		  "and (ass.MODIFIED_BY LIKE 'k%' OR ass.MODIFIED_BY LIKE 'lx%' OR ass.MODIFIED_BY LIKE 'u%' OR ass.MODIFIED_BY LIKE 'a%')" +
		  "and ass.VALID_TO is null " +
		  ") " +
		"group by ASSET_TYPE_ID, NAME, MUNICIPALITYCODE, NAME_FI, MOD_DATE " +
		"order by to_date(MOD_DATE, 'DD-MM-YYYY')", new RowMapperResultSetExtractor<rawModifiedResult>(rawModifiedResultMapper)));
	 }

	@Async
	public Future<Integer> getAllCount(String kunnat, String tietolajit) {
		return new AsyncResult<Integer>(jdbc.queryForObject("select count(coalesce(ass.MODIFIED_DATE, ass.CREATED_DATE)) as total from DR2USER.ASSET ass " +
				 "inner join DR2USER.ASSET_LINK al on ass.ID = al.ASSET_ID " + 
				 "inner join DR2USER.LRM_POSITION lrm on al.POSITION_ID = lrm.ID " +
				 "inner join VVH.ROADLINK@VVH rl on lrm.LINK_ID = rl.LINKID " +
				 "inner join DR2USER.MUNICIPALITY mu on rl.MUNICIPALITYCODE = mu.ID " +
				 "inner join DR2USER.ASSET_TYPE at on ass.ASSET_TYPE_ID = at.ID " +
				 "where ass.ASSET_TYPE_ID in (" + tietolajit + ") " +
				 "and rl.MUNICIPALITYCODE in (" + kunnat + ") " +			 
				 "and ass.VALID_TO is null", itemMapper));
	 }
	
	    private static final RowMapper<IdText> assetTypeMapper = new RowMapper<IdText>() {
	        @Override
	        public IdText mapRow(ResultSet rs, int rowNum) throws SQLException {
	        	return new IdText(rs.getInt("ID"), rs.getString("NAME"));
			} 
	    };
	    
	    private static final RowMapper<IdText> MunicipalityMapper = new RowMapper<IdText>() {
	        @Override
	        public IdText mapRow(ResultSet rs, int rowNum) throws SQLException {
	        	return new IdText(rs.getInt("ID"), rs.getString("NAME_FI"));
			} 
	    };
	    private static final RowMapper<Integer> itemMapper = new RowMapper<Integer>() {
	        @Override
	        public Integer mapRow(ResultSet rs, int rowNum) throws SQLException { 
	            int item = rs.getInt("total");
	            return item; 

			} 
	    };

	    private static final RowMapper<rawModifiedResult> rawModifiedResultMapper = new RowMapper<rawModifiedResult>() {
	        @Override
	        public rawModifiedResult mapRow(ResultSet rs, int rowNum) throws SQLException {
	        	return new rawModifiedResult(rs.getString("MOD_DATE"), rs.getInt("ASSET_TYPE_ID"), rs.getString("NAME"), rs.getInt("MUNICIPALITYCODE"), rs.getString("NAME_FI"), rs.getInt("COUNT"));
			} 
	    };
}
