package es.padelnow.jugador.controllers;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.useCases.create.CreateJugadorRequest;
import es.padelnow.jugador.useCases.create.JugadorCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jugadores")
public class JugadorPostController {
    JugadorCreator creator;

    @Autowired
    public JugadorPostController(JugadorCreator creator) {
        this.creator = creator;
    }

    @PostMapping
    public ResponseEntity<Jugador> create(@RequestBody CreateJugadorRequest request) {
        Jugador jugador = creator.create(request);

        return new ResponseEntity<>(jugador, HttpStatus.CREATED);
    }
}


