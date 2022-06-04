package es.padelnow.pareja;

import es.padelnow.jugador.Jugador;
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
    @GeneratedValue(generator = "pareja_sequence")
    @SequenceGenerator(name = "pareja_sequence", allocationSize = 1)
    private Long id;

    private int temporadasActivo;

    private String entrenador;

    @OneToMany
    private Collection<Jugador> jugadores;

    public Pareja(String entrenador, Collection<Jugador> jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    @PrePersist
    private void onCreate() {
        temporadasActivo = 1;
    }
}
