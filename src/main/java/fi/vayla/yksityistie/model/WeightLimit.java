package fi.vayla.yksityistie.model;

public class WeightLimit {
	private Boolean isRecurrent;
	private final String maxVehicleMass;
	private final String extraRoadSigns;

	public WeightLimit(Boolean isRecurrent, String maxVehicleMass, String extraRoadSigns) {
		this.isRecurrent = isRecurrent;
		this.maxVehicleMass = maxVehicleMass;
		this.extraRoadSigns = extraRoadSigns;
	}

	public Boolean getRecurrent() {
		return this.isRecurrent;
	}

	public String getMaxVehicleMass() {
		return maxVehicleMass;
	}

	public String getExtraRoadSigns() {
		return extraRoadSigns;
	}
}
