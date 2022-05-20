package es.padelnow.core.noticia.useCases.create;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class CreateNoticiaRequest {
    private String titulo;
    private String cuerpo;
    private String autor;
    private Date fecha;
}
