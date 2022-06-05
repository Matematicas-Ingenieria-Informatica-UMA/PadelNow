package es.padelnow.noticia.useCases.create;

import es.padelnow.noticia.useCases.create.CreateNoticiaRequest;

import java.net.MalformedURLException;
import java.net.URL;

public class CreateNoticiaRequestMother {

    public static CreateNoticiaRequest create(String titulo, String cuerpo, String autor, String subtitulo, URL foto) {
        return new CreateNoticiaRequest(titulo, cuerpo, autor, subtitulo, foto);
    }

    public static CreateNoticiaRequest random() {
        URL foto = null;
        try {
            foto = new URL("https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/04/5fa91bfa3d316.jpeg");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return new CreateNoticiaRequest("Ultimas novedades", "Lorem ipsum dolor sit amet", "ADMIN", "No te lo puedes perder", foto);
    }
}
