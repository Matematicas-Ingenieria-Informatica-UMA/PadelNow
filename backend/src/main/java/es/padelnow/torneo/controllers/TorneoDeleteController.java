package es.padelnow.torneo.controllers;

import es.padelnow.torneo.useCases.remove.TorneoRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TorneoDeleteController {
    private final TorneoRemover remover;

    @Autowired
    public TorneoDeleteController(TorneoRemover remover) {
        this.remover = remover;
    }

    @DeleteMapping("/torneo/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        remover.remove(id);
        return new ResponseEntity<>("DONE", HttpStatus.ACCEPTED);
    }
}