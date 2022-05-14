package es.padelnow.core.pareja;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.partido.Partido;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Pareja {

    @Id
    private Long id;

    private int temporadas_activo;

    private String entrenador;

    @ManyToMany(mappedBy = "parejas")
    private Collection<Partido> partidos;

    @OneToMany(mappedBy = "pareja")
    private Collection<Jugador> jugadores;
}
