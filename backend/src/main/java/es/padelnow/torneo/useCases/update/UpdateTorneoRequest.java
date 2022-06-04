package es.padelnow.torneo.useCases.update;

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
public class UpdateTorneoRequest {

    private String nombre;

    private String fase_inicial;

    private Collection<Partido> partidos;


}
