package fi.vayla.yksityistie.model;

import java.util.List;

public class PrivateRoad {
    private final String roadName;
    private final ReportType reportType;
    private final WeightLimit weightLimit;
    private final RoadThaw roadThaw;
    private final VehicleRestriction vehicleRestriction;
    private final RoadBarrier roadBarrier;
    private final SpeedLimit speedLimit;
    private final String otherInfo;

	public PrivateRoad(String roadName, ReportType reportType, WeightLimit weightLimit, RoadThaw roadThaw, VehicleRestriction vehicleRestriction, RoadBarrier roadBarrier, SpeedLimit speedLimit, String otherInfo) {
		this.roadName = roadName;
		this.reportType = reportType;
		this.weightLimit = weightLimit;
		this.roadThaw = roadThaw;
		this.vehicleRestriction = vehicleRestriction;
		this.roadBarrier = roadBarrier;
		this.speedLimit = speedLimit;
		this.otherInfo = otherInfo;
	}

	public String getRoadName() {
		return roadName;
	}

	public String getReportType(){
		return  reportType.toString();
	}

	public String getSpeedLimit() {
		if (speedLimit != null) {
			return speedLimit.toString();
		}  else {
			return null;
		}
	}

	public WeightLimit getWeightLimit() {
		if (weightLimit != null && weightLimit.getMaxVehicleMass() != "") {
			return weightLimit;
		} else {
			return null;
		}
	}

	public RoadThaw getRoadThaw() {
		return roadThaw;
	}

	public VehicleRestriction getVehicleRestriction() {
		return vehicleRestriction;
	}

	public String getOtherInfo() {
		return otherInfo;
	}

	public RoadBarrier getRoadBarrier() {
		return this.roadBarrier;
	}
    
}
