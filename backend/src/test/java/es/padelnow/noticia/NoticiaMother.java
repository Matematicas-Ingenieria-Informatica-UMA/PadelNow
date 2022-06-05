package es.padelnow.noticia;

import es.padelnow.noticia.useCases.create.CreateNoticiaRequest;

public class NoticiaMother {

    public static Noticia create(String titulo, String cuerpo, String subtitulo) {
        return new Noticia(titulo, cuerpo, subtitulo);
    }

    public static Noticia createFromRequest(CreateNoticiaRequest request) {
        return new Noticia(request.getTitulo(), request.getCuerpo(), request.getSubtitulo());
    }

    public static Noticia random() {
        return new Noticia("Ultimas novedades", "Lorem ipsum dolor sit amet", "No te lo puedes perder");
    }
}
