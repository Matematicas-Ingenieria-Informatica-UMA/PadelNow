package es.padelnow.core.jugador.useCases.update;

import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UpdateJugadorRequest {
    private String nombre;
    private String apellidos;
    private Sexo sexo;
    private Pais pais;
}
