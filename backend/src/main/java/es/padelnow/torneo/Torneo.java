package es.padelnow.torneo;

import es.padelnow.partido.Partido;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Torneo {

    public Torneo(String nombre, Date fechaInicial, Date fechaFinal) {
        this.nombre = nombre;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
    }

    @Id
    @SequenceGenerator(name = "torneo_sequence", allocationSize = 1)
    @GeneratedValue(generator = "torneo_sequence")
    private long id;

    @Column(nullable = false)
    private String nombre;

    private Date fechaInicial;

    private Date fechaFinal;

    @OneToMany(mappedBy = "torneo", cascade = CascadeType.ALL)
    private Collection<Partido> partidos = new ArrayList<>();
}
