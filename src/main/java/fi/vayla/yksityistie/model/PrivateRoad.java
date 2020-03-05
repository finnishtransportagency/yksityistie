package fi.vayla.yksityistie.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PrivateRoad {
    @JsonProperty("tiekunnanTienNimi")
    private String tienNimi;
    @JsonProperty("eiRajoituksia")
    private Boolean eiRajoituksia;
    @JsonProperty("onIlmoitettu")
    private Boolean onIlmoitettu;
    @JsonProperty("painorajoitus_suurin_massa")
    private String painorajoitusMassa;
    @JsonProperty("painorajoitus_lisakilvet")
    private String painorjaoitusLisakilvet;
//    @JsonProperty("kelirikkoToistuva")
//    private Boolean kelirikkoToistuva;
//    @JsonProperty("kelirikkoPainorajoitus")
//    private String kelirikkoPainorajoitus;
//    @JsonProperty("kelirikkoAlkuAika")
//    private String kelirikkoAlkuAika;
//    @JsonProperty("kelirkkoAlkuKuukausi")
//    private String kelirikkoAlkuKuukausi;
//    @JsonProperty("kelirikkoLoppuAika")
//    private String kelirikkoLoppuAika;
//    @JsonProperty("kelirikkoLoppuKuukausi")
//    private String kelirikkoLoppuKuukausi;
    private RoadThaw roadThaw;
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
            Boolean eiRajoituksia,
            Boolean onIlmoitettu,
            String painorajoitusMassa,
            String painorjaoitusLisakilvet,
//            Boolean kelirikkoToistuva,
//            String kelirikkoPainorajoitus,
//            String kelirikkoAlkuAika,
//            String kelirikkoAlkuKuukausi,
//            String kelirikkoLoppuAika,
//            String kelirikkoLoppuKuukausi,
            RoadThaw roadThaw,
            String ajokielto,
            String ajokieltoLisakilvet,
            Boolean ajoesteTiella,
            String ajoesteenTyyppi,
            String nopeusRajoitus,
            String karttalinkit,
            String muutTiedot
    ) {
        this.tienNimi = tienNimi;
        this.eiRajoituksia = eiRajoituksia;
        this.onIlmoitettu = onIlmoitettu;
        this.painorajoitusMassa = painorajoitusMassa;
        this.painorjaoitusLisakilvet = painorjaoitusLisakilvet;
        this.roadThaw = roadThaw;
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

        String output;

        output = "Tien nimi: " + tienNimi + "\n";
        
        output = output + this.roadThaw.toString();

        if(eiRajoituksia != null && eiRajoituksia || onIlmoitettu != null && onIlmoitettu){
            return output;
        }

         if (painorajoitusMassa != null && !painorajoitusMassa.isEmpty()){
            output = (output + "\t" + "Painorajotuksen suurin sallittu massa: " + painorajoitusMassa + "\n" +
                      "\t" + "Painorajoituksen lisäkilvet: " + (painorjaoitusLisakilvet != null ? painorjaoitusLisakilvet : "") + "\n");
         }
        
        

        if(ajokielto != null && !ajokielto.isEmpty()){
            output =  (output + "\t" + "Ajokielto: " + ajokielto + "\n" +
                       "\t\t" + "Ajokiellon lisäkilvet: " + ajokieltoLisakilvet + "\n");
        }

        if(ajoesteTiella != null && ajoesteTiella){
            output = (output + "\t" + "Tiellä on ajoeste: " + ajoesteTiella + "\n" +
                      "\t\t" + "Ajoesteen tyyppi: " + ajoesteenTyyppi + "\n");
        }

        output = (ajokielto != null && !ajokielto.isEmpty()) ? output + ( "\t" + "Nopeusrajoitus: " + nopeusRajoitus + "\n") : output ;
        output = (karttalinkit != null && !karttalinkit.isEmpty()) ? output + ( "\t" + "Karttalinkit: " + karttalinkit + "\n") : output ;
        output = (muutTiedot != null && !muutTiedot.isEmpty()) ? output + ( "\t" + "Muut tiedot: " + muutTiedot + "\n") : output ;

        return output;
    }
}
