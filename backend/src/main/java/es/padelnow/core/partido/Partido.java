package es.padelnow.core.partido;


import es.padelnow.core.torneo.Torneo;
import es.padelnow.core.pareja.Pareja;
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
public class Partido {
    @Id
    private long id;

    @Column(nullable = false)
    private String resultado;

    @Column(nullable = false)
    private Date fecha;

    @Column(nullable = false)
    private String juez_silla;

    @Column(nullable = false)
    private String bolas_breaks;

    @Column(nullable = false)
    private String winners;

    @Column(nullable = false)
    private String smashes;

    @Column(nullable = false)
    private String errores_no_forzados;

    @Column(nullable = false)
    private String bolas_oro;

    @Column(nullable = false)
    private String duracion;

    @Column(nullable = false)
    private String fase;

    @ManyToOne
    @JoinColumn(name = "torneo")
    private Torneo torneo;

    @ManyToMany
    @JoinTable(
            name = "parejas_partido",
            joinColumns = @JoinColumn(name = "partido_id"),
            inverseJoinColumns = @JoinColumn(name="pareja_id")
    )
    private Collection<Pareja> parejas;
}
