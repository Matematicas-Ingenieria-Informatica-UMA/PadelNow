package es.padelnow.core.jugador.useCases;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class JugadorCreatorTest {

/*    @Test
    void guardaUnJugadorValido() {
        JugadorRepository repository = mock(JugadorRepository.class);
        JugadorCreator creator = new JugadorCreator(repository);

        Jugador jugador = new Jugador("id", "nombre", "apellido", Sexo.MASCULINO, Pais.SPAIN);
        creator.create(jugador.getId(), jugador.getNombre(), jugador.getApellidos(), jugador.getSexo(), jugador.getPais());

        verify(repository, atLeastOnce()).save(jugador);
    }*/
}
