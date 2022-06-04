package es.padelnow.jugador.useCases.find;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<Jugador> search(String keyword) {
        return this.repository.search(keyword);
    }
}
