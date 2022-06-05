package es.padelnow.noticia.useCases.find;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.NoticiaMother;
import es.padelnow.noticia.NoticiaRepository;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class NoticiaFinderTest {
    NoticiaRepository repository = mock(NoticiaRepository.class);
    NoticiaFinder finder = new NoticiaFinder(repository);

    Long id = 99L;

    @Test
    void shouldReturnAValidJugadorIfExists() {
        when(repository.findById(id)).thenReturn(Optional.empty());
        Noticia findNoticia = finder.find(id);
        assertNull(findNoticia);
    }

    @Test
    void shouldReturnAllJugadores() {
        List<Noticia> noticias = Arrays.asList(
                NoticiaMother.create("Pepita Perez ganadora del mundial de Padel", "Esta mañana se ha hecho con el titulo del prestigioso titulo", "La gran sorpresa del día"),
                NoticiaMother.create("Las mejores palas de padel", "Hemos hablado con numerosos expertos y dicen que es la de la foto", "Te sorprenderá"),
                NoticiaMother.random()
        );
        when(repository.findAll()).thenReturn(noticias);
        List<Noticia> listaNoticias = finder.findAll();
        assertEquals(listaNoticias.size(), noticias.size());
        assertNotNull(listaNoticias);
    }
}
