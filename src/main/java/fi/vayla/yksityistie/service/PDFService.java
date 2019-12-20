package fi.vayla.yksityistie.service;


import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.draw.SolidLine;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.LineSeparator;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Text;
import fi.vayla.yksityistie.model.MaintenanceAssociation;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URL;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.stream.IntStream;

public class PDFService {

    public byte [] createPdf(MaintenanceAssociation userInfo) throws IOException {
        ByteArrayOutputStream fileOutputStream = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(fileOutputStream);

        PdfDocument pdf = new PdfDocument(writer);

        // Initialize document and fonts
        Document document = new Document(pdf);
        PdfFont helveticaBold = PdfFontFactory.createFont(StandardFonts.HELVETICA_BOLD);
        // PdfFont helvetica = PdfFontFactory.createFont(StandardFonts.HELVETICA);

        // Add image to document

        ImageData data = ImageDataFactory.create(new URL("classpath:images/vayla_logo.jpg"));
        Image image = new Image(data);

        image.scaleToFit(260,60);

        document.add(image);

        // Add line separator
        SolidLine greyLine = new SolidLine(0.8f);
        greyLine.setColor(new DeviceRgb(155,155,155));

        document.add( new Paragraph("\n") );
        document.add(new LineSeparator( greyLine ));


        // Add paragraph to the document
        document.add(new Paragraph(
                new Text("Tosite yksityistietietojen ilmoituksesta Digiroad-järjestelmään \n" +
                        "Dokumentbilagan om anmälan av uppgifter gällande enskilda vägar till Digiroad-systemet")
                        .setFont(helveticaBold)
                        .setFontSize(14)
        ));

        Paragraph vakuutan = new Paragraph();
        vakuutan.add(new Text("Vakuutan, että ajantasainen tieto yksityistiekunnan \n"));
        vakuutan.add(new Text("teiden rajoituksista ja kielloista on ilmoitettu Digiroad-järjestelmään. \n"));
        vakuutan.add(
                new Text(
                        "Jag försäkrar om att den aktuella informationen gällande väglagets" +
                        " begränsningar och förbud har anmälts till Digiroad-systemet."
                )
        );
        document.add(vakuutan);

        // General info
        Paragraph info = new Paragraph();
        info.add(new Text("Kunta/Kommun: "));
        info.add(new Text(userInfo.getKunta() + "\n"));

        info.add(new Text("Tiekunta/Väglagets namn: "));
        info.add(new Text(userInfo.getTiekunta() + "\n"));

        info.add(new Text("Käyttöoikeustunnus/Beteckning för nyttjanderättsenhet:"));
        info.add(new Text(userInfo.getKayttooikeusyksikkotunnus() + "\n"));

        info.add(new Text("Ilmoittajan nimi/ Anmälares namn: "));
        info.add(new Text(userInfo.getIlmoittaja() + "\n"));

        info.add(new Text("Puhelinnumero/telefonnummer: "));
        info.add(new Text(userInfo.getPuhelinnumero() + "\n"));

        info.add(new Text("Sähköposti/E-post: "));
        info.add(new Text(userInfo.getEmail() + "\n"));

        document.add(info);

        // Datestamp
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/YYYY");
        LocalDate localDate = LocalDate.now();

        document.add(
                new Paragraph(
                        new Text(dtf.format(localDate))
                                .setFont(helveticaBold)
                                .setFontSize(14)
                )
        );

        // footer
        Paragraph footer = new Paragraph();
        IntStream.range(0, 12).forEach(i -> footer.add(new Text("\n")));
        footer.add(new Text("Tämä tositeliite on ladattu Väylän yksityistietietojen ilmoitusportaalista \n"));
        footer.add(new Text("ja tulee liittää osaksi yksityistien avustushakemusta \n"));
        footer.add(new Text("ELY-keskuksen tai kunnan työntekijät voivat tarkistaa tiedot \n\n\n"));
        footer.add(new Text("info@digiroad.fi \n"));
        footer.add(new Text("040 507 2301 \n"));


        document.add(footer);

        // all done
        document.close();
        System.out.println("I TEXT IS WORKIN PROPERLY");

        return fileOutputStream.toByteArray();
    }
}
