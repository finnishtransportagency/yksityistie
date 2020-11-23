package fi.vayla.yksityistie.model;

public enum RoadBarrier {
	NO_BARRIER("Ei ajoesteitä"),
	OPEN_CONNECTION("Avattava puomi"),
	CLOSED_CONNECTION("Suljettu yhteys");
	
	private final String connectionInFinnish;
	
	private RoadBarrier(String connectionInFinnish) {
		this.connectionInFinnish = connectionInFinnish;
	}
	
	@Override
	public String toString() {
		if (connectionInFinnish.equals("Ei ajoesteitä")) {
			return "";
		} else {
			return connectionInFinnish;
		}
	}

}
