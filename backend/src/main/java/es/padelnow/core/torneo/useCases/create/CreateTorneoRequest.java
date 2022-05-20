package es.padelnow.core.torneo.useCases.create;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.partido.Partido;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
public class CreateTorneoRequest {
    private String nombre;
    private String fase_inicial;
    private Circuito circuito;
    private Collection<Partido> partidos;
}
