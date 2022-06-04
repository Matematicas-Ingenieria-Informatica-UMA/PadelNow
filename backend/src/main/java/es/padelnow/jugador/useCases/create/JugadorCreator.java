package es.padelnow.jugador.useCases.create;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
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
        Jugador jugador = new Jugador(
                request.getNombre(),
                request.getApellidos(),
                request.getSexo(),
                request.getAltura(),
                request.getPais(),
                request.getFechaNacimiento(),
                request.getBrazoDominante(),
                request.getPosicionDeJuego());

        return repository.save(jugador);
    }
}
