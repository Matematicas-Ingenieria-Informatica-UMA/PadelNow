package es.padelnow.core.pareja.useCases.create;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.partido.Partido;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
public class CreateParejaRequest {
    private long id;
    private int temporadas_activo;
    private String entrenador;
    private Collection<Partido> partidos;
    private Collection<Jugador> jugadores;
}
