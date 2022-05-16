package es.padelnow.core.jugador.useCases.create;

import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;

public final class CreateJugadorRequestMother {

    public static CreateJugadorRequest create(String nombre, String apellido, Sexo sexo, Pais pais) {
        return new CreateJugadorRequest(nombre, apellido, sexo, pais);
    }

    public static CreateJugadorRequest random() {
        return new CreateJugadorRequest("Juan", "Lebron Chincoa", Sexo.MASCULINO, Pais.SPAIN);
    }
}
