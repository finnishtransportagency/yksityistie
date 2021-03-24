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
	private final TrafficSigns trafficSigns;
    private final String otherInfo;
    private final List<Screenshot> screenshots;

	public PrivateRoad(String roadName, ReportType reportType, WeightLimit weightLimit, RoadThaw roadThaw, VehicleRestriction vehicleRestriction, RoadBarrier roadBarrier, SpeedLimit speedLimit, TrafficSigns trafficSigns, String otherInfo, List<Screenshot> screenshots) {
		this.roadName = roadName;
		this.reportType = reportType;
		this.weightLimit = weightLimit;
		this.roadThaw = roadThaw;
		this.vehicleRestriction = vehicleRestriction;
		this.roadBarrier = roadBarrier;
		this.speedLimit = speedLimit;
		this.trafficSigns = trafficSigns;
		this.otherInfo = otherInfo;
		this.screenshots = screenshots;
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

	public TrafficSigns getTrafficSigns() {
		return this.trafficSigns;
	}

	public String getOtherInfo() {
		return otherInfo;
	}

	public RoadBarrier getRoadBarrier() {
		return this.roadBarrier;
	}

	public List<Screenshot> getScreenshots() {
		return screenshots;
	}

    
}
