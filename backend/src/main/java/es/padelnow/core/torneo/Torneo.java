package es.padelnow.core.torneo;

import es.padelnow.core.circuito.Circuito;
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

    public Torneo(String nombre, String fase_inicial, Circuito circuito, Collection<Partido> partidos){
        this.nombre = nombre;
        this.fase_inicial = fase_inicial;
        this.circuito = circuito;
        this.partidos = partidos;
    }

}
