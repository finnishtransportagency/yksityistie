package fi.vayla.yksityistie.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrivateRoad {
	
    private final String roadName;
    private final Boolean hasRestrictions;
    private final Boolean alreadyCorrectInDigiroad;
    private final WeightLimit weightLimit;
    private final RoadThaw roadThaw;
    private final VehicleRestriction vehicleRestriction;
    private final RoadBarrier roadBarrier; 
    private final SpeedLimit speedLimit;
    
    private final String mapURL;
    private final String otherInfo;

    public PrivateRoad(
            String roadName,
            Boolean hasRestrictions,
            Boolean alreadyCorrectInDigiroad,
            WeightLimit weightLimit,
            RoadThaw roadThaw,
            VehicleRestriction vehicleRestriction,
            RoadBarrier roadBarrier,
            SpeedLimit speedLimit,
            String mapURL,
            String otherInfo
    ) {
        this.roadName = roadName;
        this.hasRestrictions = hasRestrictions;
        this.alreadyCorrectInDigiroad = alreadyCorrectInDigiroad;
        this.weightLimit = weightLimit;
        this.roadThaw = roadThaw;
        this.vehicleRestriction = vehicleRestriction;
        this.roadBarrier = roadBarrier;
        this.speedLimit = speedLimit;
        this.mapURL = mapURL;
        this.otherInfo = otherInfo;
    }

    @Override
    public String toString() {
    	if(!hasRestrictions || alreadyCorrectInDigiroad) {
    		return String.format("Tien nimi: %s \n", roadName);
    	} else {
    		return String.format(
            		"Tien nimi: %s \n" + // roadName(String)
            		"%s" 	+ 	// SpeedLimit(enum)
            		"%s" 	+ 	// WeightLimit(class)
            		"%s" 	+	// RoadThaw(class)
            		"%s" 	+  	// VehicleRestriction(class)
            		"%s"	+	// RoadBarrier(enum)
            		"%s"	+	// mapURL(String)
            		"%s",		// otherInfo(String)
            		roadName, 
            		speedLimit != null ? speedLimit : "",
            		weightLimit != null ? weightLimit.toString() : "",
            		roadThaw != null ? roadThaw.toString() : "",
    				vehicleRestriction != null ? vehicleRestriction.toString() : "",
    				roadBarrier != null ? roadBarrier.toString() : "",
    				formatMapURL(),
    				formatOtherInfo());
    	}
    }
    
    private String formatMapURL() {
    	if (mapURL != null && !mapURL.isEmpty()) {
    		return "  Karttalinkit: " + mapURL + "\n";
    	} else {
    		return "";
    	}
    }
    
    private String formatOtherInfo() {
    	if (otherInfo != null && !otherInfo.isEmpty()) {
    		return "  Muut tiedot: " + otherInfo + " \n";
    	} else {
    		return "";
    	}
    }
    
}
