package es.padelnow.core.jugador;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.jugador.useCases.create.CreateJugadorRequest;

public final class JugadorMother {

    public static Jugador create(String nombre, String apellidos, Sexo sexo, String pais) {
        return new Jugador(nombre, apellidos, sexo, pais);
    }

    public static Jugador createFromRequest(CreateJugadorRequest request) {
        return new Jugador(request.getNombre(), request.getApellidos(), request.getSexo(), request.getPais());
    }

    public static Jugador random() {
        return new Jugador("Alejandro", "Galán Romo", Sexo.MASCULINO, "es");
    }
}
