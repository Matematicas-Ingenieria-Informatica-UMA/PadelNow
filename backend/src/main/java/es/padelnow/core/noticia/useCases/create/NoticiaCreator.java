package es.padelnow.core.noticia.useCases.create;

import java.net.URL;
import java.util.Date;

import es.padelnow.core.noticia.Noticia;
import es.padelnow.core.noticia.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticiaCreator {
    private final NoticiaRepository repo;

    @Autowired
    public NoticiaCreator(NoticiaRepository repo) {
        this.repo = repo;
    }

    public Noticia create(CreateNoticiaRequest request) {

        Noticia noticia = new Noticia(request.getTitulo(),
                request.getCuerpo(),
                request.getAutor(),
                request.getSubtitulo(),
                request.getFoto());

        return repo.save(noticia);
    }

}
