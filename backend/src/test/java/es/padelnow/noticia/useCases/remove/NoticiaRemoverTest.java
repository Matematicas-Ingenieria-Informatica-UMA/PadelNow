package es.padelnow.noticia.useCases.remove;

import es.padelnow.noticia.NoticiaRepository;

import es.padelnow.noticia.useCases.remove.NoticiaRemover;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.*;

public class NoticiaRemoverTest {
    private final NoticiaRepository noticiaRepository = mock(NoticiaRepository.class);
    private final NoticiaRemover noticiaRemover = new NoticiaRemover(noticiaRepository);
    Long id = 99L;

    @Test
    @DisplayName("Debe eliminar una noticia si existe")
    void shouldDeleteNoticiaById() {
        when(noticiaRepository.existsById(id)).thenReturn(true);
        noticiaRemover.remove(id);
        verify(noticiaRepository, atLeastOnce()).deleteById(id);
    }

    @Test
    @DisplayName("Debe elevar una excepcion si la noticia no existe")
    void shouldThrowAnExceptionIfNoticiaDoesNotExists() {
        when(noticiaRepository.existsById(id)).thenReturn(false);
        assertThrows(IllegalStateException.class, () -> {
            noticiaRemover.remove(id);
        });
    }
}
