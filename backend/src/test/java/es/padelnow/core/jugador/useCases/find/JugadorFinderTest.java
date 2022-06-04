package es.padelnow.core.jugador.useCases.find;

import es.padelnow.jugador.Jugador;
import es.padelnow.core.jugador.JugadorMother;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.jugador.useCases.find.JugadorFinder;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class JugadorFinderTest {
    JugadorRepository repository = mock(JugadorRepository.class);
    JugadorFinder finder = new JugadorFinder(repository);

    @Test
    void shouldReturnAValidJugadorIfExists() {
        Long id = 99L;
        Jugador jugador = JugadorMother.random();
        when(repository.findById(id)).thenReturn(Optional.of(jugador));
        Jugador findJugador = finder.find(id);
        assertNotNull(findJugador);
    }

    @Test
    void shouldReturnNullIfJugadorDoesntExist() {
        Long id = 99L;
        when(repository.findById(id)).thenReturn(Optional.empty());
        Jugador findJugador = finder.find(id);
        assertNull(findJugador);
    }

    @Test
    void shouldReturnAllJugadores() {
        List<Jugador> jugadores = Arrays.asList(
                JugadorMother.create("Arturo", "Aguilera", Sexo.MASCULINO, "ES"),
                JugadorMother.create("Maria Jose", "Garcia Tobaruela",
                        Sexo.FEMENINO, "ES"),
                JugadorMother.random()
        );
        when(repository.findAll()).thenReturn(jugadores);
        List<Jugador> listaJugadores = finder.findAll();
        assertEquals(listaJugadores.size(), jugadores.size());
        assertNotNull(listaJugadores);
    }
}
