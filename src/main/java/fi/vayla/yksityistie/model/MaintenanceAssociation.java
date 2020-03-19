package fi.vayla.yksityistie.model;

import java.util.List;

import javax.validation.constraints.NotEmpty;

public class MaintenanceAssociation {
	@NotEmpty
    private String associationName;
	
	@NotEmpty
    private String municipality;
    
	// MMLIDCode = "käyttöoikeusyksikkötunnus" which is used in National Land Survey of Finland's systems.
    private String MMLIDCode;
    
    @NotEmpty
    private String reporter;
    
    @NotEmpty
    private String phone;
    
    private String email;
    
    private String relationToAssociation;
    
    @NotEmpty(message = "Maintenance Association must have at least one road.")
    private List<PrivateRoad> roads;
    
    private VoucherDeliveryMethod voucherDeliveryMethod;

    public MaintenanceAssociation(
            String associationName,
            String municipality,
            String MMLIDCode,
            String reporter,
            String phone,
            String email,
            String relationToAssociation,
            List<PrivateRoad> roads,
            VoucherDeliveryMethod voucherDeliveryMethod
    ) {
        this.associationName = associationName;
        this.municipality = municipality;
        this.MMLIDCode = MMLIDCode;
        this.reporter = reporter;
        this.phone = phone;
        this.email = email;
        this.relationToAssociation = relationToAssociation;
        this.roads = roads;
        this.voucherDeliveryMethod = voucherDeliveryMethod;
    }

    public String getAssociationName() {
        return String.format("Tiekunta/Väglagets namn: %s \n", associationName);
    }
    
    // quick fix this can be changed later
    public String getAssociationNameForMailer() {
    	return associationName;
    }

    public String getMunicipality() {
        return String.format("Kunta/Kommun: %s \n", municipality);
    }

    public String getMMLIDCode() {
        return String.format(
        		"Käyttöoikeustunnus/Beteckning för nyttjanderättsenhet: %s \n", 
        		MMLIDCode != null ? MMLIDCode : "");
    }

    public String getReporter() {
        return String.format("Ilmoittajan nimi/ Anmälares namn: %s \n", reporter);
    }

    public String getPhone() {
        return String.format("Puhelinnumero/telefonnummer: %s \n", phone);
    }

    public String getEmail() {
        return String.format("Sähköposti/E-post: %s \n", 
        		email != null ? email : "");
    }
    
    // This is a quick fix
    public String getEmailForSender() {
    	return email;
    }

    public String getRelationToAssociation() {
        return String.format("ilmoittajan suhde tiehen/Annonsörens relation till vägen: %s \n", 
        		relationToAssociation != null ? relationToAssociation : "");
    }

    public List<PrivateRoad> getRoads() {
        return roads;
    }

    // legacy can be deleted later
    public String getToimitusTapa() { return voucherDeliveryMethod.toString(); }
    
    public VoucherDeliveryMethod getVoucherDeliveryMethod() {
    	return voucherDeliveryMethod;
    }

    public String roadsToString() {
        String result = roads.stream().map(e ->  "\n" + e.toString()).reduce("", String::concat);
        return result;
    }

    @Override
    public String toString() {
    	return 	getAssociationName() + 
    			getMunicipality() + 
    			getMMLIDCode() +
    			getReporter() +
    			getPhone() +
    			getEmail() +
    			getRelationToAssociation();
    }
}
