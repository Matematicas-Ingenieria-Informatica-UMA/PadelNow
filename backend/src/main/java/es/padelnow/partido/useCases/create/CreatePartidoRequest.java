package es.padelnow.partido.useCases.create;

import es.padelnow.jugador.enums.Sexo;
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
    private Sexo genero;
    private Collection<Long> parejas;
}
