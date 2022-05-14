package es.padelnow.backend.controller.health_check;

import es.padelnow.backend.ApplicationTestCase;
import org.junit.jupiter.api.Test;

final class HealthCheckGetControllerTest extends ApplicationTestCase {

    @Test
    void checkearEstadoBackend() throws Exception {
        assertResponse("/health-check", 200, "{'status': 'ok'}");
    }
}
