package es.padelnow.noticia.useCases.create;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.NoticiaRepository;
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
