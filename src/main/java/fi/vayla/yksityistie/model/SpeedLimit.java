package fi.vayla.yksityistie.model;

public enum SpeedLimit {
	NONE(0),
	TWENTY(20),
	THIRTY(30),
	FORTY(40),
	FIFTY(50),
	SIXTY(60),
	SEVENTY(70),
	EIGHTY(80);
	
	private Integer speed;
	
	private SpeedLimit(int speed) {
		this.speed = speed;
	}
	
	@Override
	public String toString() {
		if (speed == 0) {
			return "";
		}
		else {
			return speed + " km/h";
		}
	}
}
