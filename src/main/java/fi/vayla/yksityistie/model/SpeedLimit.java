package fi.vayla.yksityistie.model;

public enum SpeedLimit {
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
		return String.format("  Nopeusrajoitus: %s Km/h \n", speed);
	}
}
