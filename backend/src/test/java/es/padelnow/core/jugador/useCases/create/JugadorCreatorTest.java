package es.padelnow.core.jugador.useCases.create;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorMother;
import es.padelnow.core.jugador.JugadorRepository;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class JugadorCreatorTest {

    @Test
    void guardaUnJugadorValido() {
        JugadorRepository repository = mock(JugadorRepository.class);
        JugadorCreator creator = new JugadorCreator(repository);

        CreateJugadorRequest request = CreateJugadorRequestMother.random();

        Jugador jugador = JugadorMother.createFromRequest(request);

        creator.create(request);

        verify(repository, atLeastOnce()).save(jugador);
    }
}
