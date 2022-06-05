package es.padelnow.pareja.useCases.update;

import es.padelnow.jugador.Jugador;
import es.padelnow.partido.Partido;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdateParejaRequest {

    private int temporadas_activo;

    private String entrenador;

    private Collection<Long> jugadores;

}
