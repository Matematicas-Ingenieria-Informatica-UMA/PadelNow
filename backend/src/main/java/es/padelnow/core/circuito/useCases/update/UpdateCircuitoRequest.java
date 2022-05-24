package es.padelnow.core.circuito.useCases.update;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.circuito.CircuitoRepository;
import es.padelnow.core.circuito.Genero;
import es.padelnow.core.institucion.Institucion;
import es.padelnow.core.torneo.Torneo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdateCircuitoRequest {

    private String nombre;

    private Date ano;

    private Genero genero;

    private Institucion institucion;

    private Collection<Torneo> torneos;


}
