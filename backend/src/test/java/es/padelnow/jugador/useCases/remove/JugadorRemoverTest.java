package es.padelnow.jugador.useCases.remove;

import es.padelnow.jugador.JugadorRepository;

import es.padelnow.jugador.useCases.remove.JugadorRemover;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.*;

class JugadorRemoverTest {
    private final JugadorRepository jugadorRepository = mock(JugadorRepository.class);
    private final JugadorRemover jugadorRemover = new JugadorRemover(jugadorRepository);
    Long id = 99L;

    @Test
    @DisplayName("Debe eliminar un jugador si este existe")
    void shouldDeleteJugadorById() {
        when(jugadorRepository.existsById(id)).thenReturn(true);
        jugadorRemover.remove(id);
        verify(jugadorRepository, atLeastOnce()).deleteById(id);
    }

    @Test
    @DisplayName("Debe elevar un excepcion si el jugador no existe")
    void shouldThrowAnExceptionIfJugadorDoesNotExists() {
        when(jugadorRepository.existsById(id)).thenReturn(false);
        assertThrows(IllegalStateException.class, () -> {
            jugadorRemover.remove(id);
        });
    }
}
