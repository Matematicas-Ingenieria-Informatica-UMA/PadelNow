package es.padelnow.backend.controller.jugador;

import es.padelnow.core.jugador.useCases.delete.JugadorRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JugadorDeleteController {

    private final JugadorRemover remover;

    @Autowired
    public JugadorDeleteController(JugadorRemover remover) {
        this.remover = remover;
    }

    @DeleteMapping("/jugador/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        remover.remove(id);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
