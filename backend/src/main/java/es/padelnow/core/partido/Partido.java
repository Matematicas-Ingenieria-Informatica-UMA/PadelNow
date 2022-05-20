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

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Partido {

    @Id
    @GeneratedValue
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

    public Partido(String resultado, Date fecha, String juez_silla, String bolas_breaks, String winners, String smashes, String errores_no_forzados, String bolas_oro, String duracion, String fase, Torneo torneo, Collection<Pareja> parejas){
        this.resultado = resultado;
        this.fecha = fecha;
        this.juez_silla = juez_silla;
        this.bolas_breaks = bolas_breaks;
        this.winners = winners;
        this.smashes = smashes;
        this.errores_no_forzados = errores_no_forzados;
        this.bolas_oro = bolas_oro;
        this.duracion = duracion;
        this.fase = fase;
        this.torneo = torneo;
        this.parejas = parejas;
    }
}
