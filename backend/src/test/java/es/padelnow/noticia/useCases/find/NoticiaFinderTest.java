package es.padelnow.noticia.useCases.find;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.NoticiaMother;
import es.padelnow.noticia.NoticiaRepository;
import org.junit.jupiter.api.Test;

import java.net.MalformedURLException;
import java.net.URL;
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
        URL foto1 = null;
        URL foto2 = null;
        try {
            foto2 = new URL("https://www.lavanguardia.com/files/image_449_220/uploads/2020/07/04/5fa91bfa3d316.jpeg");
            foto1 = new URL("https://image.shutterstock.com/image-illustration/young-girl-padel-tennis-player-260nw-495557824.jpg");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        List<Noticia> noticias = Arrays.asList(
                NoticiaMother.create("Pepita Perez ganadora del mundial de Padel", "Esta mañana se ha hecho con el titulo del prestigioso titulo", "Alberto Sánchez Muñoz", "La gran sorpresa del día", foto1),
                NoticiaMother.create("Las mejores palas de padel", "Hemos hablado con numerosos expertos y dicen que es la de la foto", "Alejandro Rey Leiva", "Te sorprenderá", foto2),
                NoticiaMother.random()
        );
        when(repository.findAll()).thenReturn(noticias);
        List<Noticia> listaNoticias = finder.findAll();
        assertEquals(listaNoticias.size(), noticias.size());
        assertNotNull(listaNoticias);
    }
}
