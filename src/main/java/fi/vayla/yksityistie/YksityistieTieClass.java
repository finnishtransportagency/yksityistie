package fi.vayla.yksityistie;

import java.util.StringJoiner;

public class YksityistieTieClass {
	private String tiennimi;
	private String painorajoitus;
	private String painorajoituslisakilvet;
	private String kelirikko;
	private String voimassaoloAikastart;
	private String voimassaoloAikaend;
	private String ajokielto;
	private String ajokieltolisakilvet;
	private String nopeusrajoitus;
	private String karttalinkit;
	
	
	public String getTiennimi() {
		return tiennimi;
	}
	public void setTiennimi(String tiennimi) {
		this.tiennimi = tiennimi;
	}
	public String getPainorajoitus() {
		return painorajoitus;
	}
	public void setPainorajoitus(String painorajoitus) {
		this.painorajoitus = painorajoitus;
	}
	public String getPainorajoituslisakilvet() {
		return painorajoituslisakilvet;
	}
	public void setPainorajoituslisakilvet(String painorajoituslisakilvet) {
		this.painorajoituslisakilvet = painorajoituslisakilvet;
	}
	public String getKelirikko() {
		return kelirikko;
	}
	public void setKelirikko(String kelirikko) {
		this.kelirikko = kelirikko;
	}
	public String getVoimassaoloAikastart() {
		return voimassaoloAikastart;
	}
	public void setVoimassaoloAikastart(String voimassaoloAikastart) {
		this.voimassaoloAikastart = voimassaoloAikastart;
	}
	public String getVoimassaoloAikaend() {
		return voimassaoloAikaend;
	}
	public void setVoimassaoloAikaend(String voimassaoloAikaend) {
		this.voimassaoloAikaend = voimassaoloAikaend;
	}
	public String getAjokielto() {
		return ajokielto;
	}
	public void setAjokielto(String ajokielto) {
		this.ajokielto = ajokielto;
	}
	public String getAjokieltolisakilvet() {
		return ajokieltolisakilvet;
	}
	public void setAjokieltolisakilvet(String ajokieltolisakilvet) {
		this.ajokieltolisakilvet = ajokieltolisakilvet;
	}
	public String getNopeusrajoitus() {
		return nopeusrajoitus;
	}
	public void setNopeusrajoitus(String nopeusrajoitus) {
		this.nopeusrajoitus = nopeusrajoitus;
	}
	public String getKarttalinkit() {
		return karttalinkit;
	}
	public void setKarttalinkit(String karttalinkit) {
		this.karttalinkit = karttalinkit;
	}

	@Override
	public String toString ()
	{
	    return new StringJoiner( "\r\n" , getTiennimi() + "\r\n[\r\n " , " \r\n]\r\n" )
	    		.add( "Tien nimi: " + tiennimi + "")
	    		.add( "Painorajoitus kg: " + painorajoitus + "")
	    		.add( "Painorajoitus lisakilvet: " + painorajoituslisakilvet + "")
	    		.add( "Kelirikko: " + kelirikko + "")
	    		.add( "Voimassaoloaika alkaa: " + voimassaoloAikastart + "")
	    		.add( "Voimassaoloaika loppuu: " + voimassaoloAikaend + "")
	    		.add( "Ajokielto: " + ajokielto + "")
	    		.add( "Ajokielto lisakilvet: " + ajokieltolisakilvet + "")
	    		.add( "Nopeusrajoitus: " + nopeusrajoitus + "")
	    		.add( "Karttalinkit: " + karttalinkit + "")
	    		.toString();
	}
}
