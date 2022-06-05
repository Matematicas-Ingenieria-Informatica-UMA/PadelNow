package es.padelnow.torneo.useCases.create;

import es.padelnow.jugador.enums.Sexo;
import es.padelnow.partido.enums.Fase;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class CreateTorneoRequest {
    private String nombre;
    private Date fechaInicial;
    private Date fechaFinal;
    private Fase faseInicial;
    private Sexo genero;
}
