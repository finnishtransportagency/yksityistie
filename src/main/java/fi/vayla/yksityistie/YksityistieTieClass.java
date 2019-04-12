package fi.vayla.yksityistie;

import java.util.StringJoiner;

public class YksityistieTieClass {
	private String tiennimi;	
	private String painorajoitus;
	private String painorajoituslisakilvet;
	private String toistuvakelirikko="";
	private String kelirikonPainoRaja;
	private String kelirikonVoimassaoloAikastart;
	private String kelirikonVoimassaoloAikaend;
	private String ajokielto;
	private String ajokieltolisakilvet;
	private String nopeusrajoitus;
	private String karttalinkit;
	private String lisatiedot;
	private String tierajoituksetcheckbox="";
	
	
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
		StringJoiner tienTiedot = new StringJoiner("\r\n" , "\r\n[\r\n " , " \r\n]\r\n"); 
		tienTiedot.add( "Tien nimi: " + tiennimi + "");
		if(tierajoituksetcheckbox.equals("false")){
			tienTiedot.add( "Painorajoitus kg: " + painorajoitus + "");
			tienTiedot.add( "Painorajoitus lisakilvet: " + painorajoituslisakilvet + "");
			if(toistuvakelirikko.equals("true")){
				tienTiedot.add( "Kelirikon painoraja: " + kelirikonPainoRaja + "")
				.add( "Kelirikon voimassaoloaika alkaa: " + kelirikonVoimassaoloAikastart + "")
				.add( "Kelirikon voimassaoloaika loppuu: " + kelirikonVoimassaoloAikaend + "");
			}
			tienTiedot.add( "Ajokielto: " + ajokielto + "")
			.add( "Ajokielto lisakilvet: " + ajokieltolisakilvet + "")
			.add( "Nopeusrajoitus: " + nopeusrajoitus + "")
			.add( "Karttalinkit: " + karttalinkit + "")
			.add( "Lisätiedot: " + lisatiedot + "");
		} else {
			tienTiedot.add( "Tiellä ei ole rajoituksia tai kieltoja");
		}
		return tienTiedot.toString();
	}
	public String getTierajoituksetcheckbox() {
		return tierajoituksetcheckbox;
	}
	public void setTierajoituksetcheckbox(String tierajoituksetcheckbox) {
		this.tierajoituksetcheckbox = tierajoituksetcheckbox;
	}


}
