package es.padelnow.core.jugador.useCases.create;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public final class JugadorCreator {

    private final JugadorRepository repository;

    @Autowired
    public JugadorCreator(JugadorRepository repository) {
        this.repository = repository;
    }


    public Jugador create(CreateJugadorRequest request) {
        Jugador jugador = new Jugador(request.getNombre(), request.getApellidos(), request.getSexo(), request.getPais());

        return repository.save(jugador);
    }
}
