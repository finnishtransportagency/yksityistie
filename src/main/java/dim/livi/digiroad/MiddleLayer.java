package dim.livi.digiroad;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;

public class MiddleLayer {
	
	private List<String> categories;
	
	public List<String> getGategories() {
		return categories;
	}
	
	public c3jsData buildC3JsChartData(String startDate, String stopDate, List<String> kombinaatiot, ArrayList<rawModifiedResult> rawData, Integer total) {

		List<String> modDates = new ArrayList<String>();
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
	    Date cStartDate = null;
	    Date cStopDate = null;
		try {
			cStartDate = format.parse(startDate);
			cStopDate = format.parse(stopDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
		for (int i =0;i<rawData.size();i++){
		    String rawDate = rawData.get(i).getMod_Date();
		    Date cRawDate = null;
			try {
				cRawDate = format.parse(rawDate);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    if (cStartDate.compareTo(cRawDate) <= 0 && cStopDate.compareTo(cRawDate) >= 0) {
		    	modDates.add(rawDate);
		    }
			}
		c3jsData chartData = new c3jsData();
		categories = new ArrayList<String>();
		List<String> headerList = new ArrayList<String>();
		headerList.add("x");
		headerList.addAll(modDates);
		String[] header = headerList.toArray(new String[0]);
		String[][] colsCumul = new String[1 + kombinaatiot.size()][headerList.size()];
		colsCumul[0] = header;
		String[][] colsCumulRel = new String[1 + kombinaatiot.size()][headerList.size()];
		colsCumulRel[0] = header;
		String[][] cols = new String[1 + kombinaatiot.size()][headerList.size()];
		cols[0] = header;
		String[][] colsRel = new String[1 + kombinaatiot.size()][headerList.size()];
		colsRel[0] = header;
		String[][] colsSum = new String[kombinaatiot.size()][2];
		String[][] colsSumRel = new String[kombinaatiot.size()][2];
		Map<String,String> names = new HashMap<String,String>();
		int i = 1;
		ListIterator<String> kombiterator = kombinaatiot.listIterator();
		while (kombiterator.hasNext()) {
			List<String> valueListCumul = new ArrayList<String>();
			List<String> valueListCumulRel = new ArrayList<String>();
			List<String> valueList = new ArrayList<String>();
			List<String> valueListRel = new ArrayList<String>();
			List<String> valueListSum = new ArrayList<String>();
			List<String> valueListSumRel = new ArrayList<String>();
			String item = kombiterator.next();
			String municipalityCode = item.split("-")[0];
			String assetTypeId = item.split("-")[1];
			valueListCumul.add(item);
			valueListCumulRel.add(item);
			valueList.add(item);
			valueListRel.add(item);
			valueListSum.add(municipalityCode);
			valueListSumRel.add(municipalityCode);
			ListIterator<String> modDiterator = modDates.listIterator();
			Integer countCumul = 0;
			Integer countSum = 0;
			Float countSumRel = 0f;
			while (modDiterator.hasNext()) {		
				String mdate = modDiterator.next();
				ListIterator<rawModifiedResult> rditerator = rawData.listIterator();
				while (rditerator.hasNext()) {					
					rawModifiedResult rditem = rditerator.next();
					if (mdate.equals(rditem.getMod_Date())
						&& municipalityCode.equals(rditem.getMunicipalityCode().toString())
						&& assetTypeId.equals(rditem.getAsset_Type_Id().toString())) {
						    Integer count = rditem.getCount();
							countCumul += rditem.getCount();
							countSum += count;
							Float percentage = total != 0 ? (float) (Math.round(10000f * count/total) / 10000f) : 0f;
							countSumRel += percentage;
							Float percentageCumul = total != 0 ? (float) (Math.round(10000f * countCumul/total) / 10000f) : 0f;
							valueListCumul.add(countCumul.toString());
							valueListCumulRel.add(percentageCumul.toString());
							valueList.add(count.toString());
							valueListRel.add(percentage.toString());
							names.put(item, rditem.getMunicipality() + " " + rditem.getAsset_type());
							names.put(municipalityCode, rditem.getMunicipality());
							this.add2Categories(rditem.getAsset_type());
							break;
						} else if (!rditerator.hasNext()) {
							valueListCumul.add("0");
							valueListCumulRel.add("0");
							valueList.add("0");
							valueListRel.add("0");
						}
				}
			}
			valueListSum.add(countSum.toString());
			valueListSumRel.add(countSumRel.toString());
			if (!this.checkIfAllZeros(valueListCumul)) {
				colsCumul[i] = valueListCumul.toArray(new String[0]);
				colsCumulRel[i] = valueListCumulRel.toArray(new String[0]);
				cols[i] = valueList.toArray(new String[0]);
				colsRel[i] = valueListRel.toArray(new String[0]);
				colsSum[i-1] = valueListSum.toArray(new String[0]);
				colsSumRel[i-1] = valueListSumRel.toArray(new String[0]);
				i++;
			}	
		}
		
		chartData.setColumnsCumul(Arrays.copyOf(colsCumul, i));
		chartData.setColumnsCumulRel(Arrays.copyOf(colsCumulRel, i));
		chartData.setColumns(Arrays.copyOf(cols, i));
		chartData.setColumnsRel(Arrays.copyOf(colsRel, i));
//		chartData.setColumnsSum(Arrays.copyOf(colsSum, i-1));
//		chartData.setColumnsSumRel(Arrays.copyOf(colsSumRel, i-1));
		chartData.setColumnsSum(this.doTheSummaryCols(colsSum));
		chartData.setColumnsSumRel(this.doTheSummaryCols(colsSumRel));
		chartData.setNames(names);
		return chartData;
	}
	
	public List<String> createArrayCombinations(String kunnat, String tietolajit) {
		List<String> kombinaatiot = new ArrayList<String>();
		List<String> kunnatList = Arrays.asList(kunnat.split("\\s*,\\s*"));
		List<String> tietolajitList = Arrays.asList(tietolajit.split("\\s*,\\s*"));
		for (String kunta : kunnatList) {
			for (String tietolaji : tietolajitList) {
				kombinaatiot.add(kunta + "-" + tietolaji);
			}
		}
		return kombinaatiot;
	}
	
	public String[][] createGroups(String kunnat, String tietolajit) {
		List<String> kunnatList = Arrays.asList(kunnat.split("\\s*,\\s*"));
		List<String> tietolajitList = Arrays.asList(tietolajit.split("\\s*,\\s*"));
		int i = 0;
		String[][] groups = new String[kunnatList.size()][tietolajitList.size()];
		for (String kunta : kunnatList) {
			int j = 0;
			for (String tietolaji : tietolajitList) {
				groups[i][j] = kunta + "-" + tietolaji;
				j++;
			}
			i++;
		}
		return groups;
	}
	
	private void add2Categories(String category) {
		if(!categories.contains(category)) categories.add(category);
	}
	
	private String[][] doTheSummaryCols(String[][] columns) {
		int categoriesSize = categories.size();
		int colsSumHeight = 1;
		if (categoriesSize!=0){colsSumHeight = columns.length/categoriesSize;}
		//int colsSumHeight = columns.length/categories.size();
		int colsSumWidth = categories.size()+1;
		String[][] colsSum = new String[colsSumHeight][colsSumWidth];
		int csi1 = 0;
		int csi2 = 0;
		for(int i=0; i<columns.length; i++){
			if(csi2 > 1 && csi2 < colsSumWidth) {
				colsSum[csi1][csi2] = columns[i][1];
				csi2++;
			}
			else {
				if(csi2 > 1) {
					csi1++;
					csi2 = 0;
				}
				if(columns[i][0]!=null){colsSum[csi1][0] = columns[i][0];}
				if(columns[i][1]!=null){colsSum[csi1][1] = columns[i][1];}
				csi2 = 2;
			}
		}
		return colsSum;
	}
	
	private boolean checkIfAllZeros(List<String> valueList) {
		ListIterator<String> valiterator = valueList.listIterator();
		while (valiterator.hasNext()) {
			boolean hasPrevious = valiterator.hasPrevious();
			String val = valiterator.next();
			if (hasPrevious && !"0".equals(val)) return false;
		}
		return true;
	}
	

}
