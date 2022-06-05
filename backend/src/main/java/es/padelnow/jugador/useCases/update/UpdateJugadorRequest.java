package es.padelnow.jugador.useCases.update;

import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.net.URL;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdateJugadorRequest {

    private Long id;

    private String nombre;

    private String apellidos;

    private Sexo sexo;

    private String foto;

    private Float altura;

    private String pais;

    private String ciudad;

    private Date fechaNacimiento;

    private BrazoDominante brazoDominante;

    private PosicionDeJuego posicionDeJuego;

}
