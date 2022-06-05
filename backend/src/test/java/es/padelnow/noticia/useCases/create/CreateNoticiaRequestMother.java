package es.padelnow.noticia.useCases.create;


public class CreateNoticiaRequestMother {

    public static CreateNoticiaRequest create(String titulo, String cuerpo, String subtitulo) {
        return new CreateNoticiaRequest(titulo, cuerpo, subtitulo);
    }

    public static CreateNoticiaRequest random() {
        return new CreateNoticiaRequest("Ultimas novedades", "Lorem ipsum dolor sit amet", "No te lo puedes perder");
    }
}
