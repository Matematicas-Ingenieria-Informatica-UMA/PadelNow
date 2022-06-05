package es.padelnow.partido.controllers;

import es.padelnow.partido.useCases.remove.PartidoRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/partidos")
public class PartidoDeleteController {
    private final PartidoRemover remover;

    @Autowired
    public PartidoDeleteController(PartidoRemover remover) {
        this.remover = remover;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        remover.remove(id);
        return new ResponseEntity<>("DONE", HttpStatus.ACCEPTED);
    }
}
