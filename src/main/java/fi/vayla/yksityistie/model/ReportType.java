package fi.vayla.yksityistie.model;

public enum ReportType {
	REPORT_CHANGES("Ilmoitan muuttuneet tai puuttuvat tiedot"),
	CORRECT("Tien tiedot ovat jo oikein Digiroadissa"),
	NO_RESTRICTIONS("Tiellä ei ole rajoituksia");

	private final String description;

	private ReportType(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return description;
	}
}
