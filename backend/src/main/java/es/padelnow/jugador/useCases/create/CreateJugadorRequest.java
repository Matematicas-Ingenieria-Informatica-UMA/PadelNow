package es.padelnow.jugador.useCases.create;

import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class CreateJugadorRequest {
    private String nombre;
    private String apellidos;
    private Sexo sexo;
    private String pais;
    private BrazoDominante brazoDominante;
    private PosicionDeJuego posicionDeJuego;
    private double altura;
    private Date fechaNacimiento;
}
