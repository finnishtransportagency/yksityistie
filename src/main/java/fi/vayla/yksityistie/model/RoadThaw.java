package fi.vayla.yksityistie.model;

public class RoadThaw {
	private Boolean isRecurrent;
	private String weightLimit;
	private String dateStart;
	private String dateEnd;
	
	public RoadThaw(
            Boolean isRecurrent,
			String weightLimit,
			String dateStart,
			String dateEnd
			) {
        this.isRecurrent = isRecurrent;
		this.weightLimit = weightLimit;
		this.dateStart = dateStart;
		this.dateEnd = dateEnd;
	}

	public String getDuration(){
		if (isRecurrent) {
			return (this.dateStart + " - " + this.dateEnd);
		} else {
			return "";
		}
	}

	public Boolean getRecurrent() {
		return isRecurrent;
	}

	public String getWeightLimit() {
		return weightLimit;
	}

	@Override
	public String toString() {
		if (isRecurrent) {
			return (this.dateStart + " - " + this.dateEnd);
		} else {
			return "";
		}
	}
	


	
}
