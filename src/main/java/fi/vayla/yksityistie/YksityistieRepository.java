package fi.vayla.yksityistie;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.Proxy;
import java.net.URL;
import java.io.ByteArrayInputStream;

/*import java.io.IOException;
import org.apache.log4j.Logger;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;

import org.springframework.stereotype.Repository;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

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

	@Value("${proxy}")
	String proxy;
	
	private static final String GOOGLE_RECAPTCHA_ENDPOINT = "https://www.google.com/recaptcha/api/siteverify";

    @Value("${google.recaptcha.key.secret}")
    private String recaptchaSecret;
    
	/**
	 * Calls methods that create PDF document, sends it to mail receivers
	 * and creates email body
	 * @param 
	 * @return
	 */
	public ByteArrayInputStream handleForm(YksityistieFormClass form){
		boolean notBot = validateCaptcha(form.getGrecaptcharesponse());
		String choice = form.getTositeliitedropdown();
		if(notBot){
			byte[] bytes = createPdf(form);
			if(choice.equals("1")){//all emails only
				sendMessages(bytes, form);
				String successText = "SUCCESS";
				byte[] success = successText.getBytes();
				return new ByteArrayInputStream(success);
			} 
			if(choice.equals("3")){//all emails and download
				sendMessages(bytes, form);
				return new ByteArrayInputStream(bytes);
				}
			if(choice.equals("2")) {//download only and email to digiroad
				form.setSahkoposti("info@digiroad.fi");//test if this works
				sendMessages(bytes, form);
				return new ByteArrayInputStream(bytes);
				} 
			else {//something went wrong
				String errorText = "ERROR EMAIL";
				byte[] error = errorText.getBytes();
				return new ByteArrayInputStream(error);	
				}
			} 
		else {//a bot
			String errorText = "ERROR CAPTCHA";
			byte[] error = errorText.getBytes();
			return new ByteArrayInputStream(error);
		}
	}
 
	
	/**
	 * This creates a mail to customer and info@digiroadi.fi
	 * @param
	 * @return
	 */
	public void sendMessages(byte[] pdf, YksityistieFormClass form) {
        MimeMessage message = emailSender.createMimeMessage();
        String[] to = new String[2]; 
        to[0]=form.getSahkoposti();
        to[1]="info@digiroad.fi";
		try {
		    ByteArrayDataSource attachment = new ByteArrayDataSource(pdf, "application/pdf");
			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			helper.setTo(to); 
			helper.setFrom("info@digiroad.fi");
	        helper.setSubject("Tosite yksityistietietojen ilmoituksesta Digiroad-järjestelmään, " + form.getTiekunta()); 
	        helper.setText(form.toString());
	        helper.addAttachment("Digiroad_tosite.pdf", attachment);
	        emailSender.send(message);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
	
	
	/**
	 * This creates the attachment PDF document from the form
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
            Paragraph p1 = new Paragraph("vayla.fi/digiroad");
            p1.add(new Chunk(glue));
            p1.add("Tämä tositeliite on ladattu Väylän yksityistietietojen ilmoitusportaalista");
            document.add(p1);
            Paragraph p2 = new Paragraph("info@digiroad.fi");
            p2.add(new Chunk(glue));
            p2.add("ja tulee liittää osaksi yksityistien avustushakemusta.                            ");
            document.add(p2);
            Paragraph p3 = new Paragraph("040 507 2301");
            p3.add(new Chunk(glue));
            p3.add("ELY-keskuksen tai kunnan työntekijät voivat tarkistaa tiedot                ");
            document.add(p3);
            Paragraph p4 = new Paragraph(" ");
            p4.add(new Chunk(glue));
            p4.add("tarvittaessa Digiroad-operaattorilta.                                                       ");
            document.add(p4);
            document.close();          
        } catch (Exception ex) {       
            //Logger.getLogger(GeneratePdfReport.class.getName()).log(Level.SEVERE, null, ex);
        }
        return out.toByteArray();
    }
 
	/**
	 * This validates reCapcha in backend
	 * @param
	 * @return
	 * @throws Exception if anything goes wrong and returns false
	 */
    public boolean validateCaptcha(String captcha){	
    	String hostNew = getHost();
    	SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
    	CaptchaResponse apiResponse = new CaptchaResponse();
    	if(hostNew != null && !hostNew.isEmpty()){
    		int portNew = getPort();
    		InetSocketAddress address = new InetSocketAddress(hostNew, portNew);
    		Proxy proxy = new Proxy(Proxy.Type.HTTP,address);
    		factory.setProxy(proxy);
    	}//proxy end
        RestTemplate restTemplate = new RestTemplate(factory);
        MultiValueMap<String, String> requestMap = new LinkedMultiValueMap<>();
        requestMap.add("secret", recaptchaSecret);
        requestMap.add("response", captcha);
        try {
        apiResponse = restTemplate.postForObject(GOOGLE_RECAPTCHA_ENDPOINT, requestMap, CaptchaResponse.class);
        } catch (Exception ex){
        	return false;
        	}
        if(apiResponse == null){
            return false;
        }
        boolean tosi =  Boolean.TRUE.equals(apiResponse.getSuccess());
        return tosi;
    }

	/**
	 * Validates proxy port
	 * @param global proxy value
	 * @return port number
	 */
	private int getPort() {
		String hostPort = proxy.replace("http://", "");
		int portti=80;
		int startIndex = hostPort.indexOf(":");
		if(startIndex == -1){//no port return default
			return portti;
		} else {
			int pituus = hostPort.length();
			String x = hostPort.substring(startIndex +1, pituus);
			try {
			portti = Integer.parseInt(x);
			} catch (NumberFormatException e){//not a number
				return portti;
			}
			return portti;
		}
	}

	/**
	 * Validates proxy host
	 * @param
	 * @return valid proxy host value, empty if no proxy
	 * @throws Exception if URL is not valid, interpreted as no proxy
	 */
	private String getHost() {
		URL host;
		try {//check if proxy address is valid
			host = new URL(proxy);
			host.toURI();
		} catch (Exception e) {
			//e.printStackTrace();
			return "";
		}
		String hostPort = proxy.replace("http://", "");
		int lastIndex = hostPort.indexOf(":");
		if(lastIndex == -1){//no port defined
			return hostPort;		
		} else {		
			return hostPort.substring(0, lastIndex);
		}
	}
}
