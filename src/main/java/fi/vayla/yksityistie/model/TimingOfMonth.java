package fi.vayla.yksityistie.model;

public enum TimingOfMonth {
	BEGINING("alku"),
	MIDDLE("keskiväli"),
	END  ("loppu");

	private final String timingInFinnish;
	
	private TimingOfMonth(String timingInFinnish) {
		this.timingInFinnish = timingInFinnish;
	}
	
	@Override
	public String toString() {
		return this.timingInFinnish;
	}
}
