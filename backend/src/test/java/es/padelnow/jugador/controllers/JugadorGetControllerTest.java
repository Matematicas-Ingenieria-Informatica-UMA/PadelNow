package es.padelnow.jugador.controllers;

import es.padelnow.jugador.JugadorRepository;
import es.padelnow.jugador.useCases.find.JugadorFinder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
public class JugadorGetControllerTest {

    private final JugadorRepository repository = Mockito.mock(JugadorRepository.class);
    private final JugadorFinder jugadorFinder = new JugadorFinder(repository);
    @Autowired
    private MockMvc mockMvc;

    @Test
    @DisplayName("Petición para obtener un recurso")
    public void getRequestIsCorrect() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/jugador"))
                .andExpect(MockMvcResultMatchers.status().is(200));
    }
}
