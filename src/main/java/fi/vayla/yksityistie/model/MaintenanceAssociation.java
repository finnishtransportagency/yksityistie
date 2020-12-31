package fi.vayla.yksityistie.model;

import java.util.List;
import javax.validation.constraints.NotEmpty;

public class MaintenanceAssociation {
	@NotEmpty
    private String associationName;
	@NotEmpty
    private String municipality;
	// mmlidcode = "käyttöoikeusyksikkötunnus" which is used in National Land Survey of Finland's systems.
    private String mmlidcode;
    @NotEmpty
    private String reporter;
    @NotEmpty
    private String phone;
    private String email;
    private String relationToAssociation;
   @NotEmpty(message = "Maintenance Association must have at least one road.")
    private List<PrivateRoad> roads;
    private VoucherDeliveryMethod voucherDeliveryMethod;


    public String getAssociationName() { return associationName; }

    public String getMunicipality() {
        return municipality;
    }

    public String getMmlidcode() { return mmlidcode; }

    public String getReporter() { return reporter; }

    public String getPhone() { return phone; }

    public String getEmail() { return email; }

    public String getRelationToAssociation() { return relationToAssociation; }

    public List<PrivateRoad> getRoads() {
        return roads;
    }

    public VoucherDeliveryMethod getVoucherDeliveryMethod() { return voucherDeliveryMethod; }
    

    @Override
    public String toString() {
    	return 	getAssociationName() + 
    			getMunicipality() + 
    			getMmlidcode() +
    			getReporter() +
    			getPhone() +
    			getEmail() +
    			getRelationToAssociation();
    }
}
