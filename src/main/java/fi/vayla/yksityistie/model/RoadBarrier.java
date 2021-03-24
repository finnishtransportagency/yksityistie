package fi.vayla.yksityistie.model;



public class RoadBarrier {

	private enum Type {
		NONE("Ei ajoesteitä"),
		OPEN_CONNECTION("Avattava puomi"),
		CLOSED_CONNECTION("Suljettu yhteys");
	
		private final String type;
	
		private Type(String type) {
			this.type = type;
		}

		@Override
		public String toString() {
			return this.type;
		}
	}

	private final Boolean isRecurrent;
	private final Type type;
	
	public RoadBarrier(Boolean isRecurrent, Type type) {
		this.isRecurrent = isRecurrent;
		this.type = type;
	}
	
	public Boolean getRecurrent() {
		return this.isRecurrent;
	}

	public String getType() {
		return this.type.toString();
	}
}
