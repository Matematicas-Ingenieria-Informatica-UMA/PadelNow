package es.padelnow.torneo;

import es.padelnow.jugador.enums.Sexo;
import es.padelnow.partido.Partido;
import es.padelnow.partido.enums.Fase;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Torneo {

    public Torneo(String nombre, Date fechaInicial, Date fechaFinal, Fase faseInicial, Sexo genero) {
        this.nombre = nombre;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.faseInicial = faseInicial;
        this.genero = genero;
    }

    @Id
    @SequenceGenerator(name = "torneo_sequence", allocationSize = 1)
    @GeneratedValue(generator = "torneo_sequence")
    private long id;

    @Column(nullable = false)
    private String nombre;

    private Date fechaInicial;

    private Date fechaFinal;

    private Fase faseInicial;

    @Enumerated(EnumType.STRING)
    private Sexo genero;

    private String pais = "es";

    private String foto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSXWMgwcnCtlREONx9MboF7enNJAxZ8tqSWZzcBlox-VN6iRWNSPJeeWM3Af9h-RAVco&usqp=CAU";

    private String institucion = "World Padel Tour";

    @OneToMany(mappedBy = "torneo", cascade = CascadeType.ALL)
    private Collection<Partido> partidos = new ArrayList<>();
}
