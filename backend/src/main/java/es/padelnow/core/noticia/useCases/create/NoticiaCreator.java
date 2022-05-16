package es.padelnow.core.noticia.useCases.create;

import java.net.URL;
import java.util.Date;

import es.padelnow.core.noticia.Noticia;
import es.padelnow.core.noticia.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticiaCreator {
    private NoticiaRepository repo;

    @Autowired
    public NoticiaCreator(NoticiaRepository repo) {
        this.repo = repo;
    }

    public Noticia create(String titulo, String subtitulo, String cuerpo, URL imagen) {
        String autor = "ADMIN";
        Noticia noticia = new Noticia(titulo, cuerpo, autor, subtitulo, imagen);
        return repo.save(noticia);
    }

    public Noticia create(String titulo, String autor) {
        Noticia noticia = new Noticia(titulo, autor, new Date(System.currentTimeMillis()));
        return repo.save(noticia);
    }

    public Noticia create() {
        Noticia noticia = new Noticia();
        return repo.save(noticia);
    }
}
