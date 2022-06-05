package es.padelnow.jugador.controllers;

import es.padelnow.jugador.useCases.remove.JugadorRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jugadores")
public class JugadorDeleteController {

    private final JugadorRemover remover;

    @Autowired
    public JugadorDeleteController(JugadorRemover remover) {
        this.remover = remover;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        remover.remove(id);
        return new ResponseEntity<>("DONE", HttpStatus.ACCEPTED);
    }
}
