package fi.vayla.yksityistie;

import java.util.List;
import java.util.StringJoiner;

public class YksityistieFormClass {

    private String kunta;
    private String tiekunta;
    private String kayttooikeustunnus="";//ei pakollinen
    private String ilmoittajanNimi;
    private String puhelinnumero;
    private String sahkoposti;
    private String toimintodropdown;
    private String vakuutantiedotcheckbox;
    private String tositeliitedropdown;
    private String grecaptcharesponse;
    private List<YksityistieTieClass> tielista;


    public String getKunta() {
        return kunta;
    }

    public void setKunta(String kunta) {
        this.kunta = kunta;
    }

	public String getTiekunta() {
		return tiekunta;
	}

	public void setTiekunta(String tiekunta) {
		this.tiekunta = tiekunta;
	}

	public String getKayttooikeustunnus() {
		return kayttooikeustunnus;
	}

	public void setKayttooikeustunnus(String kayttooikeustunnus) {
		this.kayttooikeustunnus = kayttooikeustunnus;
	}

	public String getIlmoittajanNimi() {
		return ilmoittajanNimi;
	}

	public void setIlmoittajanNimi(String ilmoittajanNimi) {
		this.ilmoittajanNimi = ilmoittajanNimi;
	}

	public String getPuhelinnumero() {
		return puhelinnumero;
	}

	public void setPuhelinnumero(String puhelinnumero) {
		this.puhelinnumero = puhelinnumero;
	}

	public String getSahkoposti() {
		return sahkoposti;
	}

	public void setSahkoposti(String sahkoposti) {
		this.sahkoposti = sahkoposti;
	}

	public String getToimintodropdown() {
		return toimintodropdown;
	}

	public void setToimintodropdown(String toimintodropdown) {	
		this.toimintodropdown = toimintodropdown.contains("1")?"Teiden tiedot ovat oikein":"Puuttuvat tai muuttuneet tiedot";
	}

	public List<YksityistieTieClass> getTielista() {
		return tielista;
	}

	public void setTielista(List<YksityistieTieClass> tielista) {
		this.tielista = tielista;
	}
	@Override
	public String toString ()
	{
		String tiet="";
		for (int i=0;i<tielista.size();i++){
			tiet = tiet +" "+ tielista.get(i).toString();
		}
	    return new StringJoiner( "\r\n" , "Ilmoitustyyppi: " + getToimintodropdown() + "\r\n" , " \r\n" )
	    		    .add( "Kunta: " + kunta + "")
	    		    .add( "Tiekunta: " + tiekunta + "")
	    		    .add( "reCaptcha: " + grecaptcharesponse + "")
	    		    .add( "Käyttöoikeustunnus: " + kayttooikeustunnus + "")
	    		    .add( "Ilmoittajan nimi: " + ilmoittajanNimi + "")
	    		    .add( "Puhelinnumero: " + puhelinnumero + "")
	    		    .add( "Sähköpostiosoite: " + sahkoposti + "\r\n")
	    		    .add(tiet)
	    			.toString();
	}

	public String getVakuutantiedotcheckbox() {
		return vakuutantiedotcheckbox;
	}

	public void setVakuutantiedotcheckbox(String vakuutantiedotcheckbox) {
		this.vakuutantiedotcheckbox = vakuutantiedotcheckbox;
	}

	public String getTositeliitedropdown() {
		return tositeliitedropdown;
	}

	public void setTositeliitedropdown(String tositeliitedropdown) {
		this.tositeliitedropdown = tositeliitedropdown;
	}

	public String getGrecaptcharesponse() {
		return grecaptcharesponse;
	}

	public void setGrecaptcharesponse(String grecaptcharesponse) {
		this.grecaptcharesponse = grecaptcharesponse;
	}
}