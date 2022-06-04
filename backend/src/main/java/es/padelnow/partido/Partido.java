package es.padelnow.partido;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import es.padelnow.torneo.Torneo;
import es.padelnow.pareja.Pareja;
import es.padelnow.partido.enums.Fase;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Getter
@Setter
@NoArgsConstructor
@Entity
public class Partido {

    public Partido(String resultado, Date fecha, String juezSilla, Fase fase, Torneo torneo, Collection<Pareja> parejas) {
        this.resultado = resultado;
        this.fecha = fecha;
        this.juezSilla = juezSilla;
        this.fase = fase;
        this.torneo = torneo;
        this.parejas = parejas;
    }

    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    private String resultado;

    @Column(nullable = false)
    private Date fecha;

    @Column(nullable = false)
    private String juezSilla;

    private String bolasDeBreaks;

    private String winners;

    private String smashes;

    private String erroresNoForzados;

    private String bolasDeOro;

    private String duracion;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Fase fase;

    @ManyToOne
    @JoinColumn(name = "torneo_id")
    private Torneo torneo;

    @ManyToMany
    @JoinTable(
            name = "parejas_partido",
            joinColumns = @JoinColumn(name = "partido_id"),
            inverseJoinColumns = @JoinColumn(name = "pareja_id")
    )
    private Collection<Pareja> parejas;
}
