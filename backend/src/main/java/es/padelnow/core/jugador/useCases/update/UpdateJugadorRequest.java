package es.padelnow.core.jugador.useCases.update;

import es.padelnow.core.jugador.enums.BrazoDominante;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.PosicionDeJuego;
import es.padelnow.core.jugador.enums.Sexo;
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

    private URL foto;

    private Float altura;

    private Pais pais;

    private String ciudad;

    private Date fechaNacimiento;

    private BrazoDominante brazoDominante;

    private PosicionDeJuego posicionDeJuego;
}
