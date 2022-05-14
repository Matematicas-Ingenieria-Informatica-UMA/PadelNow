package es.padelnow.core.institucion;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.posicion.Posicion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.net.URL;
import java.util.Collection;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Institucion {

    @Id @GeneratedValue
    private long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private URL foto;

    @OneToMany(mappedBy = "institucion")
    private Collection<Posicion> posiciones;

    @OneToMany(mappedBy = "institucion")
    private Collection<Circuito> circuitos;

}
