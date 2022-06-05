package es.padelnow.jugador.useCases.create;

import es.padelnow.jugador.enums.Sexo;
import es.padelnow.jugador.useCases.create.CreateJugadorRequest;

public final class CreateJugadorRequestMother {

    public static CreateJugadorRequest create(String nombre, String apellido, Sexo sexo, String pais) {
        return new CreateJugadorRequest(nombre, apellido, sexo, pais);
    }

    public static CreateJugadorRequest random() {
        return new CreateJugadorRequest("Juan", "Lebron Chincoa", Sexo.MASCULINO, "es");
    }
}
