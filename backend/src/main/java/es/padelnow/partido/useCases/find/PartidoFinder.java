package es.padelnow.partido.useCases.find;

import es.padelnow.partido.Partido;
import es.padelnow.partido.PartidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartidoFinder {

    private final PartidoRepository repository;

    @Autowired
    public PartidoFinder(PartidoRepository repository) {
        this.repository = repository;
    }

    public Partido find(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Partido> findAll() {
        return repository.findAll();
    }

    public List<Partido> search(String keyword) {
        return repository.search(keyword);
    }
}
