package es.padelnow.partido;

import com.fasterxml.jackson.annotation.JsonIgnore;
import es.padelnow.torneo.Torneo;
import es.padelnow.pareja.Pareja;
import es.padelnow.partido.enums.Fase;
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

    private int bolasDeBreaks = 0;

    private int winners = 0;

    private int smashes = 0;

    private int erroresNoForzados = 0;

    private int bolasDeOro = 0;

    private int duracion = 0;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Fase fase;

    @ManyToOne
    @JoinColumn(name = "torneo_id")
    @JsonIgnore
    private Torneo torneo;

    @ManyToMany
    private Collection<Pareja> parejas;
}
