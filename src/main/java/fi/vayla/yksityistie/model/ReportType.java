package fi.vayla.yksityistie.model;

public enum ReportType {
	REPORT_CHANGES("Ilmoita muuttuneet tai puuttuvat tiedot"),
	CORRECT("Tien tiedot on ilmoitettu aiemmin Digiroadiin, ja ovat jo oikein");

	private final String description;

	private ReportType(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return description;
	}
}
