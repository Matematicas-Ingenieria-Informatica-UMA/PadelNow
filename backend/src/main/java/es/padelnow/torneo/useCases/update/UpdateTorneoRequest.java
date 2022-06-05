package es.padelnow.torneo.useCases.update;

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
public class UpdateTorneoRequest {

    private String nombre;

    private Date fechaInicial;

    private Date fechaFinal;

    private Collection<Long> partidos;


}
