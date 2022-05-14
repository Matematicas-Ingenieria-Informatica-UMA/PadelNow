package es.padelnow.core.jugador.useCases;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorRepository;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public final class JugadorFinder {

    private JugadorRepository repository;

    @Autowired
    public JugadorFinder(JugadorRepository repository) {
        this.repository = repository;
    }

    public Jugador find(Long id) {
        Optional<Jugador> jugador = repository.findById(id);
        return jugador.isPresent() ? jugador.get() : null;
    }

    public List<Jugador> findAll() {
        return repository.findAll();
    }
}
