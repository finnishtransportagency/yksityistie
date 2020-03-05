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
            String kelirikkoPainorajoitus,
            TimingOfMonth startTiming,
            Month startMonth,
            TimingOfMonth endTiming,
            Month endMonth
			) {
        this.isRecurrent = isRecurrent;
        this.weightLimit = kelirikkoPainorajoitus;
        this.startTiming = startTiming;
        this.startMonth = startMonth;
        this.endTiming = endTiming;
        this.endMonth = endMonth;
	}
	
	@Override
	public String toString() {
		if (isRecurrent) {
		return String.format(
				"  Tiellä on toistuva kelirikko: \n" +
				"    ajankohta: %s %s - %s %s \n" + 
				"    kelirikon aikainen painorajoitus: %s \n", 
				startMonth, startTiming, endMonth, endTiming, weightLimit);
		} else {
			return "";
		}
	}
	


	
}
