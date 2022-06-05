package es.padelnow.pareja;

import com.fasterxml.jackson.annotation.JsonIgnore;
import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.partido.Partido;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Pareja implements Comparable {

    public Pareja(String entrenador, Sexo genero, Collection<Jugador> jugadores) {
        this.entrenador = entrenador;
        this.genero = genero;
        this.jugadores = jugadores;
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

    private boolean activa = true;

    @ManyToMany(mappedBy = "parejas", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<Partido> partidos;

    @ManyToMany
    private Collection<Jugador> jugadores;

    @Override
    public int compareTo(Object o) {
        if (o instanceof Pareja p) {
            return (Integer.compare(this.puntos, p.puntos));
        } else
            return -1;
    }
}
