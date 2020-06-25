package fi.vayla.yksityistie.model;

public class RoadThaw {
	private Boolean isRecurrent;
    private String weightLimit;
    private TimingOfMonth startTiming;
    private Month startMonth;
    private TimingOfMonth endTiming;
    private Month endMonth;
	
	public RoadThaw(
            Boolean isRecurrent,
            String weightLimit,
            TimingOfMonth startTiming,
            Month startMonth,
            TimingOfMonth endTiming,
            Month endMonth
			) {
        this.isRecurrent = isRecurrent;
        this.weightLimit = weightLimit;
        this.startTiming = startTiming;
        this.startMonth = startMonth;
        this.endTiming = endTiming;
        this.endMonth = endMonth;
	}

	public String getDuration(){
		if (isRecurrent) {
			return String.format("%s %s - %s %s", startMonth, startTiming, endMonth, endTiming);
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
		return String.format("%s %s - %s %s", startMonth, startTiming, endMonth, endTiming);
		} else {
			return "";
		}
	}
	


	
}
