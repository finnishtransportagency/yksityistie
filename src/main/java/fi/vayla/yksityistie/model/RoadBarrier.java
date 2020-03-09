package fi.vayla.yksityistie.model;

public enum RoadBarrier {
	OPEN_CONNECTION("Avattava puomi"),
	CLOSED_CONNECTION("Suljettu yhteys");
	
	private final String connectionInFinnish;
	
	private RoadBarrier(String connectionInFinnish) {
		this.connectionInFinnish = connectionInFinnish;
	}
	
	@Override
	public String toString() {
		return String.format(
				"  Tiellä on ajoeste: \n"+
				"    Ajoesteen tyyppi: %s \n", 
				connectionInFinnish);
	}

}
