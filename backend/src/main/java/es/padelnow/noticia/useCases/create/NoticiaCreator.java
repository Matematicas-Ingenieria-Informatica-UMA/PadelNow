package es.padelnow.noticia.useCases.create;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticiaCreator {
    private final NoticiaRepository noticiaRepository;

    @Autowired
    public NoticiaCreator(NoticiaRepository noticiaRepository) {
        this.noticiaRepository = noticiaRepository;
    }

    public Noticia create(CreateNoticiaRequest request) {
        Noticia noticia = new Noticia(request.getTitulo(), request.getSubtitulo(), request.getCuerpo());
        return noticiaRepository.save(noticia);
    }

}
