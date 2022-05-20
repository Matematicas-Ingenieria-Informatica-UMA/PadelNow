package es.padelnow.core.pareja;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.partido.Partido;
import lombok.AllArgsConstructor;
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

    @Id
    @GeneratedValue
    private Long id;

    private int temporadas_activo;

    private String entrenador;

    @ManyToMany(mappedBy = "parejas")
    private Collection<Partido> partidos;

    @OneToMany(mappedBy = "pareja")
    private Collection<Jugador> jugadores;

    public Pareja(int temporadas_activo, String entrenador, Collection<Partido> partidos, Collection<Jugador> jugadores){
        this.temporadas_activo = temporadas_activo;
        this.entrenador = entrenador;
        this.partidos = partidos;
        this.jugadores = jugadores;
    }
}
