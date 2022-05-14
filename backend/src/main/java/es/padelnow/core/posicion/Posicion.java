package es.padelnow.core.posicion;

import es.padelnow.core.institucion.Institucion;
import es.padelnow.core.jugador.Jugador;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Posicion {

    @EmbeddedId
    private PosicionId id;

    @Column(nullable = false)
    private int posicion;

    @Column(nullable = false)
    private int puntos;

    @ManyToOne(optional = false)
    @MapsId("jugador_id")
    @JoinColumn(name = "jugador_id")
    private Jugador jugador;

    @ManyToOne(optional = false)
    @MapsId("institucion_id")
    @JoinColumn(name = "institucion_id")
    private Institucion institucion;


}
