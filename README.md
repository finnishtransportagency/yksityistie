## Digiroad OTH - Raportointityökalu

Sovelluksella luodaan temporaalisia raportteja OTH kannan tietolajeista. Raportit suodatetaan kunnittain ja niillä voidaan seurata kannan ominaisuustietojen laatua.

## Kehitysympäristön pystyttäminen

Kloonaa projekti:
$ git clone https://github.com/finnishtransportagency/drreport.git
Käytä GIT Flow prosessin mukaista työtapaa.

NodeJS asennus:
cd ./src/main/resources/static
npm install
npm run build

Asennasenna Oraclen kannan ajurit jos ei ole jo repositoryssä:
mvn install:install-file -Dfile=ojdbc14-10.2.0.4.0.jar -DgroupId=com.oracle -DartifactId=ojdbc14 -Dversion=10.2.0.4.0 -Dpackaging=jar

Maven käännös:
mvn -B clean package

## Rajapinta

Metodi: GET
API: /raportit/graafi1/{startdate}/{stopdate}/{kunnat}/{tietolajit}/{hallinnollinenluokka}
esimerkiksi: 

## Testit

## License

Copyright 2017 - present NLS under EUPL v1.1 (English version is included in https://github.com/finnishtransportagency/drreport/blob/develop/LICENSE).
