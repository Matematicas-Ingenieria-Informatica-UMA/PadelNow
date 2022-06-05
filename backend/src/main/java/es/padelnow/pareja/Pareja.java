package es.padelnow.pareja;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.enums.Sexo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Pareja {

    public Pareja(String entrenador, Sexo genero) {
        this.entrenador = entrenador;
        this.genero = genero;
    }

    @Id
    @GeneratedValue(generator = "pareja_sequence")
    @SequenceGenerator(name = "pareja_sequence", allocationSize = 1)
    private Long id;

    private int temporadasActivo = 1;

    private String entrenador;

    private int puntos = 0;
    @Enumerated(EnumType.STRING)
    private Sexo genero;

    @OneToMany(mappedBy = "pareja", cascade = CascadeType.ALL)
    private Collection<Jugador> jugadores;
}
