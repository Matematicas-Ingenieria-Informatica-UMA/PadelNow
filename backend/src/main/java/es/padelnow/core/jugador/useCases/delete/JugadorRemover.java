package es.padelnow.core.jugador.useCases.delete;

import es.padelnow.core.jugador.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JugadorRemover {

    private final JugadorRepository repository;

    @Autowired
    public JugadorRemover(JugadorRepository repository) {
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
