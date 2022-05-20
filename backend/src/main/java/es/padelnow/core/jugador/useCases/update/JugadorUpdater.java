package es.padelnow.core.jugador.useCases.update;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JugadorUpdater {

    private final JugadorRepository repository;

    @Autowired
    public JugadorUpdater(JugadorRepository repository) {
        this.repository = repository;
    }

    public void update(Long id, UpdateJugadorRequest request) {
        Optional<Jugador> busquedaJugador = repository.findById(id);
        if (busquedaJugador.isPresent()) {
            Jugador jugador = busquedaJugador.get();
            // TODO: Merge the request and the database data
            repository.save(jugador);
        } else {
            throw new IllegalStateException("Jugador with id " + id + " does not exists");
        }
    }
}
