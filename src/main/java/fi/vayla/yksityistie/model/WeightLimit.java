package fi.vayla.yksityistie.model;

public class WeightLimit {
	private final String maxVehicleMass;
	private final String extraRoadSigns;

	public WeightLimit(String maxVehicleMass, String extraRoadSigns) {
		this.maxVehicleMass = maxVehicleMass;
		this.extraRoadSigns = extraRoadSigns;
	}

	public String getMaxVehicleMass() {
		return maxVehicleMass;
	}

	public String getExtraRoadSigns() {
		return extraRoadSigns;
	}
}
