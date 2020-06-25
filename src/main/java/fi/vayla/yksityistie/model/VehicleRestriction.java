package fi.vayla.yksityistie.model;

public class VehicleRestriction {
	private final String restrictionType;
	private final String extraRoadSigns;
	
	public VehicleRestriction(String restrictionType,String extraRoadSigns) {
		this.restrictionType = restrictionType;
		this.extraRoadSigns = extraRoadSigns;
	}

	public String getRestrictionType() {
		return restrictionType;
	}

	public String getExtraRoadSigns() {
		return extraRoadSigns;
	}

	@Override
	public String toString() {
		if(restrictionType.isEmpty()) {
			return "";
		} else {
		return String.format(
				"  Tiellä on ajokeilto: \n" +
				"    Ajokiellon tyyppi: %s \n" +
				"    Ajokiellon lisäkilvet: %s \n", 
				restrictionType, 
				extraRoadSigns != null ? extraRoadSigns : "");
		}
	}
}
