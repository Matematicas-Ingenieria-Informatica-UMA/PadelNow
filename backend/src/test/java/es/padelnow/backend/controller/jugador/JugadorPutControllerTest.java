package es.padelnow.backend.controller.jugador;

import com.fasterxml.jackson.databind.ObjectMapper;
import es.padelnow.backend.ApplicationTestCase;
import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

final class JugadorPutControllerTest extends ApplicationTestCase {

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void creaUnCursoValido() throws Exception {

        Jugador jugador = new Jugador("Juan", "Lebron", Sexo.MASCULINO, Pais.SPAIN);

        System.out.println(objectMapper.writeValueAsString(jugador));

        assertRequestWithBody(
                "PUT",
                "/jugador/93a397fe-6652-4d60-90f3-4d0bff066162",
                objectMapper.writeValueAsString(jugador),
                HttpStatus.CREATED.value()
        );
    }

}
