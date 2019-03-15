package fi.vayla.yksityistie;

import java.util.StringJoiner;

public class YksityistieTieClass {
	private String tiennimi;
	private String painorajoitus;
	private String painorajoituslisakilvet;
	private String toistuvakelirikko;
	private String kelirikonPainoRaja;
	private String kelirikonVoimassaoloAikastart;
	private String kelirikonVoimassaoloAikaend;
	private String ajokielto;
	private String ajokieltolisakilvet;
	private String nopeusrajoitus;
	private String karttalinkit;
	private String lisatiedot;
	
	
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
	public String getToistuvakelirikko() {
		return toistuvakelirikko;
	}
	public void setToistuvakelirikko(String toistuvakelirikko) {
		this.toistuvakelirikko = toistuvakelirikko;
	}
	public String getKelirikonVoimassaoloAikastart() {
		return kelirikonVoimassaoloAikastart;
	}
	public void setKelirikonVoimassaoloAikastart(String kelirikonVoimassaoloAikastart) {
		this.kelirikonVoimassaoloAikastart = kelirikonVoimassaoloAikastart;
	}
	public String getKelirikonVoimassaoloAikaend() {
		return kelirikonVoimassaoloAikaend;
	}
	public void setKelirikonVoimassaoloAikaend(String kelirikonVoimassaoloAikaend) {
		this.kelirikonVoimassaoloAikaend = kelirikonVoimassaoloAikaend;
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
	public String getKelirikonPainoRaja() {
		return kelirikonPainoRaja;
	}
	public void setKelirikonPainoRaja(String kelirikonPainoRaja) {
		this.kelirikonPainoRaja = kelirikonPainoRaja;
	}
	public String getLisatiedot() {
		return lisatiedot;
	}
	public void setLisatiedot(String lisatiedot) {
		this.lisatiedot = lisatiedot;
	}
	
	@Override
	public String toString ()
	{
	    return new StringJoiner( "\r\n" , getTiennimi() + "\r\n[\r\n " , " \r\n]\r\n" )
	    		.add( "Tien nimi: " + tiennimi + "")
	    		.add( "Painorajoitus kg: " + painorajoitus + "")
	    		.add( "Painorajoitus lisakilvet: " + painorajoituslisakilvet + "")
	    		.add( "Toistuva kelirikko: " + toistuvakelirikko + "")
	    		.add( "Kelirikon painoraja: " + kelirikonPainoRaja + "")
	    		.add( "Kelirikon voimassaoloaika alkaa: " + kelirikonVoimassaoloAikastart + "")
	    		.add( "Kelirikon voimassaoloaika loppuu: " + kelirikonVoimassaoloAikaend + "")
	    		.add( "Ajokielto: " + ajokielto + "")
	    		.add( "Ajokielto lisakilvet: " + ajokieltolisakilvet + "")
	    		.add( "Nopeusrajoitus: " + nopeusrajoitus + "")
	    		.add( "Karttalinkit: " + karttalinkit + "")
	    		.add( "Lisätiedot: " + lisatiedot + "")
	    		.toString();
	}


}
