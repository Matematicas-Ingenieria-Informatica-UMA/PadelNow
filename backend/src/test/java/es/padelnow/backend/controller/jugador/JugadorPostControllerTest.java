package es.padelnow.backend.controller.jugador;

import com.fasterxml.jackson.databind.ObjectMapper;
import es.padelnow.backend.ApplicationTestCase;
import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

final class JugadorPostControllerTest extends ApplicationTestCase {

    private final ObjectMapper objectMapper;

    JugadorPostControllerTest(ObjectMapper objectMapper) {
        this.objectMapper = new ObjectMapper();
    }

    @Test
    void creaUnCursoValido() throws Exception {

        Jugador jugador = new Jugador("Juan", "Lebron", Sexo.MASCULINO, Pais.ES);

        assertRequestWithBody(
                "POST",
                "/jugador",
                objectMapper.writeValueAsString(jugador),
                HttpStatus.CREATED.value()
        );
    }

}
