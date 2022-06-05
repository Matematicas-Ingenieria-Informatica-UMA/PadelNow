package es.padelnow.noticia.useCases.create;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.net.URL;


@Data
@AllArgsConstructor
public class CreateNoticiaRequest {
    private String titulo;
    private String cuerpo;
    private String subtitulo;
}
