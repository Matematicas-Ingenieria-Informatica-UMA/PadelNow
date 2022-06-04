package es.padelnow.noticia;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.net.URL;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Noticia {
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String cuerpo;

    @Column(nullable = false)
    private String autor;

    @Column
    private String subtitulo;

    @ColumnDefault(value = "CURRENT_TIMESTAMP")
    @Column(nullable = false)
    private Date fecha;

    @Column
    private URL foto;

    public Noticia(String titulo, String autor, Date fecha) {
        this.titulo = titulo;
        this.autor = autor;
        this.fecha = fecha;
    }

    public Noticia(long id, String titulo, String autor, Date fecha) {
        this(titulo, autor, fecha);
        this.id = id;
    }

    public Noticia(String titulo, String cuerpo, String autor, String subtitulo, URL foto) {
        this(titulo, autor, new Date(System.currentTimeMillis()));
        this.cuerpo = cuerpo;
        this.foto = foto;
    }

}
