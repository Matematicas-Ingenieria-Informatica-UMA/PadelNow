package es.padelnow.noticia.useCases.update;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.net.URL;
import java.util.Date;


@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdateNoticiaRequest {

    private String titulo;

    private String cuerpo;

    private String autor;

    private String subtitulo;

    private Date fecha;

    private URL foto;

}
