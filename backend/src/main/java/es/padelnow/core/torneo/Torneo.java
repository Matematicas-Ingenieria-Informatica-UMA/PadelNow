package es.padelnow.core.torneo;

import es.padelnow.core.circuito.Circuito;
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
public class Torneo {
    @Id @GeneratedValue
    private long id;

    @Column(nullable = false)
    private String nombre;

    @Column (nullable = false)
    private String fase_inicial;

    @ManyToOne
    @JoinColumn(name = "circuito")
    private Circuito circuito;

    @OneToMany(mappedBy = "torneo")
    private Collection<Partido> partidos;

}
