package es.padelnow.jugador;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.jugador.useCases.create.CreateJugadorRequest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public final class JugadorMother {

    public static Jugador create(String nombre, String apellidos, Sexo sexo, double altura, String pais, Date fechaNacimiento, BrazoDominante brazoDominante, PosicionDeJuego posicionDeJuego) {
        return new Jugador(nombre, apellidos, sexo, altura, pais, fechaNacimiento, brazoDominante, posicionDeJuego);
    }

    public static Jugador createFromRequest(CreateJugadorRequest request) {
        return new Jugador(request.getNombre(), request.getApellidos(), request.getSexo(), request.getAltura(), request.getPais(), request.getFechaNacimiento(), request.getBrazoDominante(), request.getPosicionDeJuego());
    }

    public static Jugador random() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            return new Jugador(
                    "Ignacio", "Ávila Reyes", Sexo.MASCULINO, 1.75, "br",
                    dateFormat.parse("2001-12-31"), BrazoDominante.DIESTRO, PosicionDeJuego.DERECHA);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
