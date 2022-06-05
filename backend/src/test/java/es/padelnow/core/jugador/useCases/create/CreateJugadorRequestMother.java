package es.padelnow.core.jugador.useCases.create;

import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.jugador.useCases.create.CreateJugadorRequest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public final class CreateJugadorRequestMother {

    public static CreateJugadorRequest create(String nombre, String apellido, Sexo sexo, double altura, String pais, Date fechaNacimiento, BrazoDominante brazoDominante, PosicionDeJuego posicionDeJuego) {
        return new CreateJugadorRequest(nombre, apellido, sexo, pais, brazoDominante, posicionDeJuego, altura, fechaNacimiento);
    }

    public static CreateJugadorRequest random() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            return new CreateJugadorRequest("Ignacio", "Ávila Reyes", Sexo.MASCULINO, "br",
                    BrazoDominante.DIESTRO, PosicionDeJuego.DERECHA, 1.75, dateFormat.parse("2001-12-31"));
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
