package es.padelnow.core.torneo.useCases.update;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.partido.Partido;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdateTorneoRequest {

    private String nombre;

    private String fase_inicial;

    private Circuito circuito;

    private Collection<Partido> partidos;


}
