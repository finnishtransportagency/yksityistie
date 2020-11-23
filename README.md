## Digiroad - Yksityistielomake


## Kehitysympäristön pystyttäminen

Kloonaa projekti:
$ git clone https://github.com/finnishtransportagency/yksityistie.git
Käytä GIT Flow prosessin mukaista työtapaa.

Maven käännös:
mvn -B clean package


## Ympäristömuuttujat

Jostain syystä CI on toteutettu niin, että se ei hyödynnä ympäristömuuttujia perinteiseen tapaan (esim. ${MAIL_HOST}), joten katso tiedosto:
`src/main/resources/application.properties`

Oletuksena ympäristömuuuttujat on kommentoitu ulos, mutta voit ottaa ne käyttöön poistamalla kommentit `development`osioista ja lisäämällä kommentit `production` osioon. Kunhan muistat laittaa ne ennen GitHubiin pushaamista takaisin (CI/CD:tä varten) näin (ilman dollareita ja aaltosulkeita!):

`spring.mail.host = MAIL_HOST`
`recaptcha.secret = CAPTCHA_SECRET`
`recaptcha.proxy = HTTPS_PROXY`

## Frontin buildaaminen

Fronte End on rakennettu Reactilla ja se on erillinen projekti. Reactin production build laitetaan kansioon `src/main/resources/static`. Paikallisesti sitä voi ihailla `localhost:9003/yksityistie`

Front End löytyy `(Lisää tähän URL kun viimeinkin siiehen saataisiin se oma repo!!!)`

## Testit

## License

Copyright 2017 - present NLS under EUPL v1.1 (English version is included in https://github.com/finnishtransportagency/yksityistie/blob/develop/LICENSE).
