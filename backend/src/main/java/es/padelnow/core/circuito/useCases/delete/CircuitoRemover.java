package es.padelnow.core.circuito.useCases.delete;

import es.padelnow.core.circuito.CircuitoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CircuitoRemover {

    private final CircuitoRepository repository;

    @Autowired
    public CircuitoRemover(CircuitoRepository repository) {
        this.repository = repository;
    }
    
    public void remove(Long id) {
        boolean exists = repository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("Jugador with id " + id + " does not exists");
        } else {
            repository.deleteById(id);
        }
    }
}
