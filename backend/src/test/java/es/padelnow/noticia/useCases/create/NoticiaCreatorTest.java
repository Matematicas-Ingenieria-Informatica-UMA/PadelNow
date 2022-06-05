package es.padelnow.noticia.useCases.create;


import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.NoticiaMother;
import es.padelnow.noticia.NoticiaRepository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class NoticiaCreatorTest {
    NoticiaRepository noticiaRepository = mock(NoticiaRepository.class);
    NoticiaCreator noticiaCreator = new NoticiaCreator(noticiaRepository);

    @Test
    @DisplayName("El test deberia invocar de forma correcta el metodo save del repositorio")
    void guardaUnaNoticiaValida() {
        CreateNoticiaRequest request = CreateNoticiaRequestMother.random();
        Noticia noticia = NoticiaMother.createFromRequest(request);
        noticiaCreator.create(request);
        verify(noticiaRepository, atLeastOnce()).save(noticia);
    }
}
