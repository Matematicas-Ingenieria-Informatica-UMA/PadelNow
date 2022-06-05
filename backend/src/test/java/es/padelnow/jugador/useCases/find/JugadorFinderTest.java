package es.padelnow.jugador.useCases.find;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorMother;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class JugadorFinderTest {
    JugadorRepository repository = mock(JugadorRepository.class);
    JugadorFinder finder = new JugadorFinder(repository);
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

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
        List<Jugador> jugadores = null;
        try {
            jugadores = Arrays.asList(
                    JugadorMother.create("Arturo", "Aguilera González", Sexo.MASCULINO, 1.75, "ar",
                            dateFormat.parse("1985-12-31"), BrazoDominante.ZURDO, PosicionDeJuego.REVES),
                    JugadorMother.random()
            );
        } catch (ParseException e) {
            e.printStackTrace();
        }
        when(repository.findAll()).thenReturn(jugadores);
        List<Jugador> listaJugadores = finder.findAll();
        assertEquals(listaJugadores.size(), jugadores.size());
        assertNotNull(listaJugadores);
    }
}
