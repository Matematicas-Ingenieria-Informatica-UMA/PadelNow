package es.padelnow.backend.controller.jugador;

import es.padelnow.core.jugador.useCases.create.CreateJugadorRequest;
import es.padelnow.core.jugador.useCases.create.JugadorCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class JugadorPostController {
    JugadorCreator creator;

    public JugadorPostController(JugadorCreator creator) {
        this.creator = creator;
    }

    @PostMapping("/jugador")
    public ResponseEntity<String> create(@RequestBody CreateJugadorRequest request) {
        this.creator.create(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}


