package es.padelnow.core.jugador.useCases.update;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorMother;
import es.padelnow.core.jugador.JugadorRepository;
import es.padelnow.core.jugador.useCases.find.JugadorFinder;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.mockito.Mockito.*;

import static org.junit.jupiter.api.Assertions.*;

class JugadorUpdaterTest {

    JugadorRepository repository = mock(JugadorRepository.class);
    JugadorUpdater updater = new JugadorUpdater(repository);

    @Test
    void shouldUpdateAJugadorIfExists() {
        Long id = 99L;
        Jugador jugador = JugadorMother.random();

        when(repository.findById(id)).thenReturn(Optional.of(jugador));
    }

    @Test
    void shouldThrowAnExceptionIfJugadorDoesNotExists() {
        Long id = 99L;
        Jugador jugador = JugadorMother.random();
        when(repository.existsById(id)).thenReturn(false);

        assertThrows(IllegalStateException.class, () -> {
            
        });

    }

}
