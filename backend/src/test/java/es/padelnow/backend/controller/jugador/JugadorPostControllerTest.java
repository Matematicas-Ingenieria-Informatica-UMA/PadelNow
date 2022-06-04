package es.padelnow.backend.controller.jugador;

import com.fasterxml.jackson.databind.ObjectMapper;
import es.padelnow.backend.ApplicationTestCase;
import es.padelnow.jugador.Jugador;
import es.padelnow.core.jugador.JugadorMother;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

final class JugadorPostControllerTest extends ApplicationTestCase {

    private final ObjectMapper objectMapper;

    JugadorPostControllerTest(ObjectMapper objectMapper) {
        this.objectMapper = new ObjectMapper();
    }

    @Test
    void creaUnCursoValido() throws Exception {

        Jugador jugador = JugadorMother.random();

        assertRequestWithBody(
                "POST",
                "/jugador",
                objectMapper.writeValueAsString(jugador),
                HttpStatus.CREATED.value()
        );
    }

}
