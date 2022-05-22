package es.padelnow.core.circuito.useCases.find;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.circuito.CircuitoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CircuitoFinder {
    private final CircuitoRepository repository;

    @Autowired
    public CircuitoFinder(CircuitoRepository repository) {
        this.repository = repository;
    }

    public Circuito find(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Circuito> findAll() {
        return repository.findAll();
    }

}
