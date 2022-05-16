package es.padelnow.core.noticia.useCases.find;

import es.padelnow.core.noticia.Noticia;
import es.padelnow.core.noticia.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticiaFinder {

    private final NoticiaRepository repository;

    @Autowired
    public NoticiaFinder(NoticiaRepository repository) {
        this.repository = repository;
    }
    
    public Noticia find(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Noticia> findAll() {
        return repository.findAll();
    }
}
