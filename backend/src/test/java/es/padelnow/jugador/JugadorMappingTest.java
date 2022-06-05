package es.padelnow.jugador;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.openapitools.jackson.nullable.JsonNullable;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import es.padelnow.jugador.useCases.update.UpdateJugadorRequest;

import static org.junit.jupiter.api.Assertions.*;

public class JugadorMappingTest {

    @Autowired
    private ObjectMapper mapper;

    @Test
    void should_use_json_nullable_module() throws JsonProcessingException {
        assertEquals(JsonNullable.of("Fulanito Menganitez"), mapper.readValue("{\"nombre\":\"Fulanito Menganitez\"}", UpdateJugadorRequest.class).getNombre());
        assertEquals(JsonNullable.of(null), mapper.readValue("{\"description\":null}", UpdateJugadorRequest.class).getNombre());
        assertNull(mapper.readValue("{}", UpdateJugadorRequest.class).getNombre());
    }
}
