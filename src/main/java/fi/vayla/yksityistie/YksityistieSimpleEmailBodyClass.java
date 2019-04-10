package fi.vayla.yksityistie;

import java.util.StringJoiner;

public class YksityistieSimpleEmailBodyClass {

	public static String body = new StringJoiner( "\r\n" , "" + "" + "\r\n" , " \r\n" )
			.add( "Kiitos yksityistien tietojen toimittamisesta Väylän Digiroad-järjestelmään. Olemme vastaanottaneet ilmoituksen.")
			.add( "")
			.add( "Tarkistathan tämän viestin lopusta, että ilmoittamasi tiedot ovat oikein. Jos havaitset virheitä ilmoituksessa, voit lähettää korjauksen vastaamalla tähän sähköpostiviestiin tai täyttämällä ilmoituslomakkeen uudelleen osoiteessa vayla.fi/yksityistiet . ")
			.add( "")
			.add( "Ilmoitetut rajoitustiedot viedään osaksi Digiroad-aineistoa mahdollisimman pian ja tiedot tuleva näkyviin karttapalveluun noin 2 viikon kuluessa ilmoituksesta.")
			.add( "")
			.add( "Oikein hyvää jatkoa!")
			.add( "")
			.add( "Ystävällisin terveisin,")
			.add( "Digiroad-operaattori")
			.add( "040 507 2301 ")
			.add( "info@digiroad.fi")
			.add( "vayla.fi/digiroad")
			.add( "")
			.add( "")
			.add( "")
			.add( "Ilmoitetut yksityistien tiedot: ")
			.toString();
}
