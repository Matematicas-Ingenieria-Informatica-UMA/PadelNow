package es.padelnow.core.circuito;

import es.padelnow.core.institucion.Institucion;
import es.padelnow.core.torneo.Torneo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Circuito {

    @Id @GeneratedValue
    private Long id;
    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)
    private Date ano;
    @Column(nullable = false)
    private Genero genero;


    @ManyToOne(optional = false)
    @JoinColumn(name = "institucion_id")
    private Institucion institucion;

    @OneToMany(mappedBy = "circuito")
    private Collection<Torneo> torneos;

}
