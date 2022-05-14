package es.padelnow.core.posicion;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@Data
public class PosicionId implements Serializable {

    @Column(name = "jugador_id")
    private Long jugador;

    @Column(name = "institucion_id")
    private Long institucion;
}
