package es.padelnow.core.noticia.useCases.delete;

import es.padelnow.core.noticia.NoticiaRepository;
import es.padelnow.core.noticia.Noticia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticiaDeleter {
    private final NoticiaRepository repository;

    @Autowired
    public NoticiaDeleter(NoticiaRepository repository) {
        this.repository = repository;
    }

    public void delete(Long Id){
        this.repository.deleteById(Id);
    }

}
