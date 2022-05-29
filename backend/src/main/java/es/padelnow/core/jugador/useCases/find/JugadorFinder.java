package es.padelnow.core.jugador.useCases.find;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JugadorFinder {

    private final JugadorRepository repository;

    @Autowired
    public JugadorFinder(JugadorRepository repository) {
        this.repository = repository;
    }

    public Jugador find(Long id) {
        return this.repository.findById(id).orElse(null);
    }

    public List<Jugador> findAll() {
        return this.repository.findAll();
    }
}
