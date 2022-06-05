package es.padelnow.noticia;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.useCases.create.CreateNoticiaRequest;

import java.net.MalformedURLException;
import java.net.URL;

public class NoticiaMother {

    public static Noticia create(String titulo, String cuerpo, String autor, String subtitulo, URL foto) {
        return new Noticia(titulo, cuerpo, autor, subtitulo, foto);
    }

    public static Noticia createFromRequest(CreateNoticiaRequest request) {
        return new Noticia(request.getTitulo(), request.getCuerpo(), request.getAutor(), request.getSubtitulo(), request.getFoto());
    }

    public static Noticia random() {
        URL foto = null;
        try {
            foto = new URL("https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/04/5fa91bfa3d316.jpeg");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return new Noticia("Ultimas novedades", "Lorem ipsum dolor sit amet", "ADMIN", "No te lo puedes perder", foto);
    }
}
