package es.padelnow.partido;

import com.fasterxml.jackson.annotation.JsonIgnore;
import es.padelnow.jugador.enums.Sexo;
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

    public Partido(String resultado, Date fecha, String juezSilla, Sexo genero, Fase fase, Torneo torneo, Collection<Pareja> parejas) {
        this.resultado = resultado;
        this.fecha = fecha;
        this.juezSilla = juezSilla;
        this.genero = genero;
        this.fase = fase;
        this.torneo = torneo;
        this.parejas = parejas;
    }

    @Id
    @SequenceGenerator(name = "partido_sequence")
    @GeneratedValue(generator = "partido_sequence")
    private long id;

    @Column(nullable = false)
    private String resultado;

    @Column(nullable = false)
    private Date fecha;

    @Column(nullable = false)
    private String juezSilla;

    private String bolasDeBreaks = "-/- -/-";

    private String winners = "- -";

    private String smashes = "-/- -/-";

    private String erroresNoForzados = "- -";

    private String bolasDeOro = "- -";

    private String duracion = "00:00:00";

    @Enumerated(EnumType.STRING)
    private Sexo genero;

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
