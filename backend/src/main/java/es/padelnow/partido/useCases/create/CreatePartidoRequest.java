package es.padelnow.partido.useCases.create;

import es.padelnow.partido.enums.Fase;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class CreatePartidoRequest {
    private String resultado;
    private Date fecha;
    private String juezSilla;
    private Fase fase;
    private Long torneo;
    private Collection<Long> parejas;
}
