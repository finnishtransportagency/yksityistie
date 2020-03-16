package fi.vayla.yksityistie.model;

public class WeightLimit {
	private final String maxVehicleMass;
	private final String extraRoadSigns;
	
	public WeightLimit(String maxVehicleMass, String extraRoadSigns) {
		this.maxVehicleMass = maxVehicleMass;
		this.extraRoadSigns = extraRoadSigns;
	}
	
	@Override
	public String toString() {
		if (maxVehicleMass.isEmpty()) {
			return "";
		} else {
		return String.format(
				"  Tiellä on painorajoitus: \n" +
				"    Suurin sallittu massa: %s \n" +
				"    Painorajoituksen lisäkilvet: %s \n", 
				maxVehicleMass, extraRoadSigns);
		}
	}

}
