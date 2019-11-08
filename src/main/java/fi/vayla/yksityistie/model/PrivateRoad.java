package fi.vayla.yksityistie.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrivateRoad {
    @JsonProperty("tiekunnanTienNimi")
    private String tienNimi;
    @JsonProperty("painorajoitus")
    private Boolean painorajoitus;
    @JsonProperty("painorajoitus_suurin_massa")
    private String painorajoitusMassa;
    @JsonProperty("painorajoitus_lisakilvet")
    private String painorjaoitusLisakilvet;
    @JsonProperty("kelirikkoToistuva")
    private Boolean kelirikkoToistuva;
    @JsonProperty("kelirikkoPainorajoitus")
    private String kelirikkoPainorajoitus;
    @JsonProperty("kelirikkoAlkuAika")
    private String kelirikkoAlkuAika;
    @JsonProperty("kelirkkoAlkuKuukausi")
    private String kelirikkoAlkuKuukausi;
    @JsonProperty("kelirikkoLoppuAika")
    private String kelirikkoLoppuAika;
    @JsonProperty("kelirikkoLoppuKuukausi")
    private String kelirikkoLoppuKuukausi;
    @JsonProperty("ajokielto")
    private String ajokielto;
    @JsonProperty("ajokieltoLisakilver")
    private String ajokieltoLisakilvet;
    @JsonProperty("ajoesteTiella")
    private Boolean ajoesteTiella;
    @JsonProperty("ajoesteenTyyppi")
    private String ajoesteenTyyppi;
    @JsonProperty("nopeusRajoitus")
    private String nopeusRajoitus;
    @JsonProperty("karttalinkit")
    private String karttalinkit;
    @JsonProperty("muutTiedot")
    private String muutTiedot;

    public PrivateRoad(
            String tienNimi,
            Boolean painorajoitus,
            String painorajoitusMassa,
            String painorjaoitusLisakilvet,
            Boolean kelirikkoToistuva,
            String kelirikkoPainorajoitus,
            String kelirikkoAlkuAika,
            String kelirikkoAlkuKuukausi,
            String kelirikkoLoppuAika,
            String kelirikkoLoppuKuukausi,
            String ajokielto,
            String ajokieltoLisakilvet,
            Boolean ajoesteTiella,
            String ajoesteenTyyppi,
            String nopeusRajoitus,
            String karttalinkit,
            String muutTiedot
    ) {
        this.tienNimi = tienNimi;
        this.painorajoitus = painorajoitus;
        this.painorajoitusMassa = painorajoitusMassa;
        this.painorjaoitusLisakilvet = painorjaoitusLisakilvet;
        this.kelirikkoToistuva = kelirikkoToistuva;
        this.kelirikkoPainorajoitus = kelirikkoPainorajoitus;
        this.kelirikkoAlkuAika = kelirikkoAlkuAika;
        this.kelirikkoAlkuKuukausi = kelirikkoAlkuKuukausi;
        this.kelirikkoLoppuAika = kelirikkoLoppuAika;
        this.kelirikkoLoppuKuukausi = kelirikkoLoppuKuukausi;
        this.ajokielto = ajokielto;
        this.ajokieltoLisakilvet = ajokieltoLisakilvet;
        this.ajoesteTiella = ajoesteTiella;
        this.ajoesteenTyyppi = ajoesteenTyyppi;
        this.nopeusRajoitus = nopeusRajoitus;
        this.karttalinkit = karttalinkit;
        this.muutTiedot = muutTiedot;
    }

    @Override
    public String toString() {
        return
                "Tien nimi: " + tienNimi + "\n" +
                "painorajoitus: " + painorajoitus + "\n" +
                "Painorajotuksen suurin sallittu massa: " + painorajoitusMassa + "\n" +
                "Painorajoituksen lisäkilvet: " + painorjaoitusLisakilvet + "\n" +
                "Toistuva kelirikko: " + kelirikkoToistuva + "\n" +
                "Kelirikon painorajoitus: " + kelirikkoPainorajoitus + "\n" +
                "Kelirikon kesto: "  + kelirikkoAlkuKuukausi + " " + kelirikkoAlkuAika + " - "
                                     + kelirikkoLoppuKuukausi + " " + kelirikkoLoppuAika + "\n" +
                "Ajokielto: " + ajokielto + "\n" +
                "Ajokiellon lisäkilver: " + ajokieltoLisakilvet + "\n" +
                "Ajoeste tiellä: " + ajoesteTiella + "\n" +
                "Ajoesteen tyyppi: " + ajoesteenTyyppi + "\n" +
                "Nopeusrajoitus: " + nopeusRajoitus + "\n" +
                "Karttalinkit: " + karttalinkit + "\n" +
                "Muut tiedot: " + muutTiedot + "\n";
    }
}
