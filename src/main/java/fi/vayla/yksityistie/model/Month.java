package fi.vayla.yksityistie.model;

public enum Month {
	JAN("Tammikuu"), 
	FEB("Helmikuu"), 
	MAR("Maaliskuu"), 
	APR("Huhtikuu"),
	MAY("Toukokuu"),
	JUN("Kesäkuu"),
	JUL("Heinäkuu"), 
	AUG("Elokuu"), 
	SEP("Syyskuu"),
	OCT("Lokakuu"),
	NOV("Marraskuu"),
	DEC("Joulukuu");
	
	private final String monthInFinnish;
	
	private Month(String monthInFinnish) {
		this.monthInFinnish = monthInFinnish;
	}
	
	@Override
	public String toString() {
		return monthInFinnish;
	}

}
