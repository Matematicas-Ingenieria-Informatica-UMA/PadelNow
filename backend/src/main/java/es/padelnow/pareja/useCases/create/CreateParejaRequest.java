package es.padelnow.pareja.useCases.create;

import es.padelnow.jugador.enums.Sexo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
public class CreateParejaRequest {
    private String entrenador;
    private Collection<Long> jugadores;
    private Sexo genero;
}
