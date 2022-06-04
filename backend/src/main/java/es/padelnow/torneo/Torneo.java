package es.padelnow.torneo;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import es.padelnow.partido.Partido;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
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

    @OneToMany(mappedBy = "torneo")
    private Collection<Partido> partidos;

    @PrePersist
    private void onCreate() {
        partidos = new ArrayList<>();
    }
}
