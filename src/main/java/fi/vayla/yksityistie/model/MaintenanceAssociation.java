package fi.vayla.yksityistie.model;

import java.util.List;

public class MaintenanceAssociation {
    private String tiekunta;
    private String kunta;
    private String kayttooikeusyksikkotunnus;
    private String ilmoittaja;
    private String puhelinnumero;
    private String email;
    private String ilmoittajanSuhde;
    private List<PrivateRoad> roads;
    private String toimitusTapa;

    public MaintenanceAssociation(
            String tiekunta,
            String kunta,
            String kayttooikeusyksikkotunnus,
            String ilmoittaja,
            String puhelinnumero,
            String email,
            String ilmoittajanSuhde,
            List<PrivateRoad> roads,
            String toimitusTapa
    ) {
        this.tiekunta = tiekunta;
        this.kunta = kunta;
        this.kayttooikeusyksikkotunnus = kayttooikeusyksikkotunnus;
        this.ilmoittaja = ilmoittaja;
        this.puhelinnumero = puhelinnumero;
        this.email = email;
        this.ilmoittajanSuhde = ilmoittajanSuhde;
        this.roads = roads;
        this.toimitusTapa = toimitusTapa;
    }

    public String getTiekunta() {
        return tiekunta;
    }

    public String getKunta() {
        return kunta;
    }

    public String getKayttooikeusyksikkotunnus() {
        return kayttooikeusyksikkotunnus;
    }

    public String getIlmoittaja() {
        return ilmoittaja;
    }

    public String getPuhelinnumero() {
        return puhelinnumero;
    }

    public String getEmail() {
        return email;
    }

    public String getIlmoittajanSuhde() {
        return ilmoittajanSuhde;
    }

    public List<PrivateRoad> getRoads() {
        return roads;
    }

    public String getToimitusTapa() { return toimitusTapa; }

    private String roadsToString() {

        String result = roads.stream().map(e ->  "\n" + e.toString()).reduce("", String::concat);

        return result;
    }

    @Override
    public String toString() {
        return
                "Tiekunta/Väglagets namn: " + tiekunta + "\n" +
                "Kunta/Kommun: " + kunta + "\n" +
                "Käyttöoikeustunnus/Beteckning för nyttjanderättsenhet: " + kayttooikeusyksikkotunnus + "\n" +
                "Ilmoittajan nimi/ Anmälares namn: " + ilmoittaja + "\n" +
                "Puhelinnumero/telefonnummer: " + puhelinnumero + "\n" +
                "Sähköposti/E-post: " + email + "\n" +
                "ilmoittajan suhde tiehen/Annonsörens relation till vägen: " + ilmoittajanSuhde + "\n" +
                roadsToString();
    }
}
