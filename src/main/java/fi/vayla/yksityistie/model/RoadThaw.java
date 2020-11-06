package fi.vayla.yksityistie.model;

public class RoadThaw {
	private Boolean isRecurrent;
	private String weightLimit;
	private String dateRange;
	
	public RoadThaw(
            Boolean isRecurrent,
			String weightLimit,
			String dateRange
			) {
        this.isRecurrent = isRecurrent;
		this.weightLimit = weightLimit;
		this.dateRange = dateRange;
	}

	public String getDuration(){
		if (isRecurrent) {
			return this.dateRange;
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
			return this.dateRange;
		} else {
			return "";
		}
	}
	


	
}
