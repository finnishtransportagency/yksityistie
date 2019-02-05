package dim.livi.digiroad;

import java.util.Map;

public class c3jsData {
	
	private String[][] columns_cumul;
	private String[][] columns_cumul_rel;
	private String[][] columns;
	private String[][] columns_rel;
	private String[][] columns_sum;
	private String[][] columns_sum_rel;
	private String[][] groups;
	private String[] categories;
	private Map<?, ?> names;
	
	public String[][] getColumnsCumul() {
		return columns_cumul;
	}
	public void setColumnsCumul(String[][] columns) {
		this.columns_cumul = columns;
	}
	public String[][] getColumnsCumulRel() {
		return columns_cumul_rel;
	}
	public void setColumnsCumulRel(String[][] columns) {
		this.columns_cumul_rel = columns;
	}
	public String[][] getColumns() {
		return columns;
	}
	public void setColumns(String[][] columns) {
		this.columns = columns;
	}
	public String[][] getColumnsRel() {
		return columns_rel;
	}
	public void setColumnsRel(String[][] columns) {
		this.columns_rel = columns;
	}
	public String[][] getColumnsSum() {
		return columns_sum;
	}
	public void setColumnsSum(String[][] columns) {
		this.columns_sum = columns;
	}
	public String[][] getColumnsSumRel() {
		return columns_sum_rel;
	}
	public void setColumnsSumRel(String[][] columns) {
		this.columns_sum_rel = columns;
	}
	public String[][] getGroups() {
		return groups;
	}
	public void setCategories(String[] categories) {
		this.categories = categories;
	}
	public String[] getCategories() {
		return categories;
	}
	public void setGroups(String[][] groups) {
		this.groups = groups;
	}
	public Map<?, ?> getNames() {
		return names;
	}
	public void setNames(Map<?, ?> names) {
		this.names = names;
	}
}
