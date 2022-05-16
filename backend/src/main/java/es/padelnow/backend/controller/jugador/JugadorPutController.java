package es.padelnow.backend.controller.jugador;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.useCases.update.UpdateJugadorRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JugadorPutController {

    @PutMapping("/jugador/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody UpdateJugadorRequest request) {
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
