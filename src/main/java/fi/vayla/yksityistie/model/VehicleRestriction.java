package fi.vayla.yksityistie.model;

public class VehicleRestriction {
	private Boolean isRecurrent;
	private final String restrictionType;
	private final String extraRoadSigns;
	
	public VehicleRestriction(Boolean isRecurrent, String restrictionType, String extraRoadSigns) {
		this.isRecurrent = isRecurrent;
		this.restrictionType = restrictionType;
		this.extraRoadSigns = extraRoadSigns;
	}

	public Boolean getRecurrent() {
		return this.isRecurrent;
	}

	public String getRestrictionType() {
		return restrictionType;
	}

	public String getExtraRoadSigns() {
		return extraRoadSigns;
	}

	@Override
	public String toString() {
		if(this.isRecurrent) {
			return String.format(
				"  Tiellä on ajokielto: \n" +
				"    Ajokiellon tyyppi: %s \n" +
				"    Ajokiellon lisäkilvet: %s \n", 
				restrictionType, 
				extraRoadSigns != null ? extraRoadSigns : "");
		} else {
			return "";
		}
	}
}
