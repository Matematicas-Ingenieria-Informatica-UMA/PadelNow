package es.padelnow.jugador;

import com.fasterxml.jackson.annotation.JsonIgnore;
import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.pareja.Pareja;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
public class Jugador {

    public Jugador(String nombre, String apellidos, Sexo sexo, double altura, String pais, Date fechaNacimiento, BrazoDominante brazoDominante, PosicionDeJuego posicionDeJuego) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.altura = altura;
        this.pais = pais;
        this.fechaNacimiento = fechaNacimiento;
        this.brazoDominante = brazoDominante;
        this.posicionDeJuego = posicionDeJuego;
    }

    @Id
    @SequenceGenerator(name = "jugador_sequence", allocationSize = 1)
    @GeneratedValue(generator = "jugador_sequence")
    private Long id;

    private String nombre;

    private String apellidos;

    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    private String foto = "https://clinicaangeleslm.com/v2/images/images/PNG/user.png";

    private double altura;

    private String pais;

    private String ciudad;

    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

    @Enumerated(EnumType.STRING)
    @Column(name = "brazo_dominante")
    private BrazoDominante brazoDominante;

    @Enumerated(EnumType.STRING)
    @Column(name = "posicion_de_juego")
    private PosicionDeJuego posicionDeJuego;
}
