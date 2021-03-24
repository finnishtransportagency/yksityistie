package fi.vayla.yksityistie.model;

public enum SpeedLimit {
	NONE("Ei tietoa"),
	TWENTY("20 km/h"),
	THIRTY("30 km/h"),
	FORTY("40 km/h"),
	FIFTY("50 km/h"),
	SIXTY("60 km/h"),
	SEVENTY("70 km/h"),
	EIGHTY("80 km/h"),
	GENERAL_50("Yleisrajoitus (50 km/h)"),
	GENERAL_80("Yleisrajoitus (80 km/h)"),
	UNKNOWN("Ei tietoa");
	
	private final String speed;
	
	private SpeedLimit(String speed) {
		this.speed = speed;
	}
	
	@Override
	public String toString() {
		if (speed.equals("Ei tietoa")) {
			return "";
		}
		else {
			return speed;
		}
	}
}
