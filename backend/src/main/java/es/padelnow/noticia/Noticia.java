package es.padelnow.noticia;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.net.URL;
import java.util.Date;

@NoArgsConstructor
@Data
@Entity
public class Noticia {

    public Noticia(String titulo, String subtitulo, String cuerpo) {
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this.subtitulo = subtitulo;
    }

    @Id
    @SequenceGenerator(name = "noticia_sequence", allocationSize = 1)
    @GeneratedValue(generator = "noticia_sequence")
    private long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String cuerpo;

    private String subtitulo;

    @Column(nullable = false)
    private Date fecha = new Date();

    private String foto = "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF";

    private String video = "https://www.youtube.com/embed/Nfq9ZmjilaQ";
}
