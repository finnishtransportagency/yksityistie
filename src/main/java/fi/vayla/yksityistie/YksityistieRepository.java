package fi.vayla.yksityistie;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.io.ByteArrayInputStream;

/*import java.io.IOException;
import org.apache.log4j.Logger;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;

import org.springframework.stereotype.Repository;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
//import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;

import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import com.itextpdf.text.pdf.draw.VerticalPositionMark;

@Repository
public class YksityistieRepository {

	@Autowired
    public JavaMailSender emailSender;
	
	
	/**
	 * Calls methods that create PDF document, sends it to mail receivers
	 * and creates email body
	 * @param 
	 * @return
	 */
	public ByteArrayInputStream handleForm(YksityistieFormClass form){
		byte[] bytes = createPdf(form);
		sendMessages(bytes, form);
		return new ByteArrayInputStream(bytes);
	}
 
	
	/**
	 * This creates a mail to customer and info@digiroadi.fi
	 * @param
	 * @return
	 */
	public void sendMessages(byte[] pdf, YksityistieFormClass form) {
        MimeMessage message = emailSender.createMimeMessage();
        String[] to = new String[1]; 
        //to[0]=form.getSahkoposti();
        to[0]="pasi.savolainen@sitowise.com";//info@digiroadi.fi
		try {
			ByteArrayDataSource attachment = new ByteArrayDataSource(pdf, "application/pdf");
			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			helper.setTo(to); 
			helper.setFrom("info@digiroadi.fi");
	        helper.setSubject("Tosite yksityistietietojen ilmoituksesta Digiroad-järjestelmään, " + form.getTiekunta()); 
	        helper.setText(form.toString());
	        //helper.addAttachment("Digiroad_tosite.pdf", attachment);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}       
        emailSender.send(message);
    }
	
	
	/**
	 * This creates the attachment PDF dokument from the form
	 * @param
	 * @return
	 * @throws IOException 
	 * @throws MalformedURLException 
	 */
    public static byte[] createPdf(YksityistieFormClass form) {

        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);//to byte[] directly?
            document.open();
            Image image = Image.getInstance(new URL("classpath:static/images/logo_Digiroad_png.png"));
            image.scaleAbsolute(200,60);
            image.setAlignment(Image.RIGHT);
            document.add(new Paragraph("Kansallinen tie- ja katuverkon"));
            document.add(new Paragraph("tietojärjestelmä"));
            document.add(new Chunk(image, 300, 0));
            document.add( Chunk.NEWLINE );
            document.add(new LineSeparator(0.5f, 100, null, 0, -5));
            document.add( Chunk.NEWLINE );
            Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
            document.add(new Paragraph("Tosite yksityistietietojen ilmoituksesta Digiroad-järjestelmään", headFont));
            document.add(new Paragraph(" "));
            document.add(new Paragraph("Vakuutan, että ajantasainen tieto yksityistiekunnan"));   
            document.add(new Paragraph("teiden rajoituksista ja kielloista on ilmoitettu Digiroad-järjestelmään."));
            document.add(new Paragraph(" "));
            document.add(new Paragraph("Kunta: " + form.getKunta()));
            document.add(new Paragraph("Tiekunta: " + form.getTiekunta()));
            document.add(new Paragraph("Käyttöoikeustunnustus: " + form.getKayttooikeustunnus()));
            document.add(new Paragraph("Ilmoittajan nimi: " + form.getIlmoittajanNimi()));
            document.add(new Paragraph("Puhelinnumero: " + form.getPuhelinnumero()));
            document.add(new Paragraph("Sähköpostiosoite: " + form.getSahkoposti()));
            for(int i=0; i<23;i++){
            	document.add( Chunk.NEWLINE );
            }
            document.add(new LineSeparator(0.5f, 100, null, 0, -5));
            Chunk glue = new Chunk(new VerticalPositionMark());
            Paragraph p1 = new Paragraph("liikennevirasto.fi/digiroad");
            p1.add(new Chunk(glue));
            p1.add("Tämä tositeliite on ladattu Liikenneviraston yksityistietietojen ilmoitus-    ");
            document.add(p1);
            Paragraph p2 = new Paragraph("info@digiroad.fi");
            p2.add(new Chunk(glue));
            p2.add("portaalista ja tulee liittää osaksi yksityistien avustushakemusta.              ");
            document.add(p2);
            Paragraph p3 = new Paragraph("040 507 2301");
            p3.add(new Chunk(glue));
            p3.add("ELY-keskuksen tai kunnan työntekijät voivat tarkistaa tiedot tarvittaessa");
            document.add(p3);
            Paragraph p4 = new Paragraph(" ");
            p4.add(new Chunk(glue));
            p4.add("Digiroad-operaattorilta.                                                                              ");
            document.add(p4);
            document.close();          
        } catch (Exception ex) {       
            //Logger.getLogger(GeneratePdfReport.class.getName()).log(Level.SEVERE, null, ex);
        }
        return out.toByteArray();
    }
}
