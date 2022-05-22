package es.padelnow.core.jugador.useCases.find;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorMother;
import es.padelnow.core.jugador.JugadorRepository;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import es.padelnow.core.jugador.useCases.create.JugadorCreator;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
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
                JugadorMother.create("Arturo", "Aguilera", Sexo.MASCULINO, Pais.ES),
                JugadorMother.create("Maria Jose", "Garcia Tobaruela", Sexo.FEMENINO, Pais.ES),
                JugadorMother.random()
        );

        when(repository.findAll()).thenReturn(jugadores);

        List<Jugador> listaJugadores = finder.findAll();

        assertEquals(listaJugadores.size(), jugadores.size());
        assertNotNull(listaJugadores);

    }
}
