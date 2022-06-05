package es.padelnow.jugador.useCases.create;

import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.jugador.useCases.create.CreateJugadorRequest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public final class CreateJugadorRequestMother {

    public static CreateJugadorRequest create(String nombre, String apellido, Sexo sexo, String pais, BrazoDominante brazoDominante, PosicionDeJuego posicionDeJuego, double altura, Date fechaNac) {
        return new CreateJugadorRequest(nombre, apellido, sexo, pais, brazoDominante, posicionDeJuego, altura, fechaNac);
    }
    
    public static CreateJugadorRequest random() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            return new CreateJugadorRequest("Juan", "Lebron Chincoa", Sexo.MASCULINO, "es", BrazoDominante.DIESTRO, PosicionDeJuego.REVES, 1.70, dateFormat.parse("1992-05-28"));
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
