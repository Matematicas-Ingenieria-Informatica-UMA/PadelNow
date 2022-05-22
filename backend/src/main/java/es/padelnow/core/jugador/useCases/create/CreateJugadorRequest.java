package es.padelnow.core.jugador.useCases.create;

import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
public class CreateJugadorRequest {
    private String nombre;
    private String apellidos;
    private Sexo sexo;
    private Pais pais;
}
