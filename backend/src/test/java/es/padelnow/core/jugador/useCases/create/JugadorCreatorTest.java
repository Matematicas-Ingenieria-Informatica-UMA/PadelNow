package es.padelnow.core.jugador.useCases.create;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorMother;
import es.padelnow.core.jugador.JugadorRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class JugadorCreatorTest {
    JugadorRepository repository = mock(JugadorRepository.class);
    JugadorCreator creator = new JugadorCreator(repository);

    @Test
    @DisplayName("El test deberia invocar de forma correcta el metodo save del repositorio")
    void guardaUnJugadorValido() {
        CreateJugadorRequest request = CreateJugadorRequestMother.random();
        Jugador jugador = JugadorMother.createFromRequest(request);
        creator.create(request);
        verify(repository, atLeastOnce()).save(jugador);
    }
}
