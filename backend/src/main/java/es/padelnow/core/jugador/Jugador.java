package es.padelnow.core.jugador;

import es.padelnow.core.jugador.enums.BrazoDominante;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.PosicionDeJuego;
import es.padelnow.core.jugador.enums.Sexo;
import es.padelnow.core.pareja.Pareja;
import es.padelnow.core.posicion.Posicion;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.net.URL;
import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@EqualsAndHashCode
public class Jugador {

    public Jugador(String nombre, String apellidos, Sexo sexo, Pais pais) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.pais = pais;
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellidos;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Sexo sexo;

    private URL foto;

    private float altura;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Pais pais;

    private String ciudad;

    @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

    @Enumerated(EnumType.STRING)
    @Column(name = "brazo_dominante")
    private BrazoDominante brazoDominante;

    @Enumerated(EnumType.STRING)
    @Column(name = "posicion_de_juego")
    private PosicionDeJuego posicionDeJuego;

    @OneToMany(mappedBy = "jugador")
    private Collection<Posicion> posiciones;

    @ManyToOne
    @JoinColumn(name = "pareja_id")
    private Pareja pareja;

}
