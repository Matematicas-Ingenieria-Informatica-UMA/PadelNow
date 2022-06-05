package es.padelnow.jugador.useCases.update;

import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.openapitools.jackson.nullable.*;

import java.net.URL;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdateJugadorRequest {

    private Long id;

    private JsonNullable<String> nombre;
    private JsonNullable<String> apellidos;
    private JsonNullable<Sexo> sexo;
    private JsonNullable<String> foto;
    private JsonNullable<Float> altura;
    private JsonNullable<String> pais;
    private JsonNullable<String> ciudad;
    private JsonNullable<Date> fechaNacimiento;
    private JsonNullable<BrazoDominante> brazoDominante;
    private JsonNullable<PosicionDeJuego> posicionDeJuego;

    /*

    private String nombre;

    private String apellidos;

    private Sexo sexo;

    private URL foto;

    private Float altura;

    private String pais;

    private String ciudad;

    private Date fechaNacimiento;

    private BrazoDominante brazoDominante;

    private PosicionDeJuego posicionDeJuego;

    */

}
