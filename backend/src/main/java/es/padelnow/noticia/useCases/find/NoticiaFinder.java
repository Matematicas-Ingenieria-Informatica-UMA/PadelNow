package es.padelnow.noticia.useCases.find;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.NoticiaRepository;
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

    public List<Noticia> search(String keyword) {
        return this.repository.search(keyword);
    }
}
