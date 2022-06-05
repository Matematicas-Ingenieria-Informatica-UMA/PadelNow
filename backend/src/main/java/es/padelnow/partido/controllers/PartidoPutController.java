package es.padelnow.partido.controllers;

import es.padelnow.partido.useCases.update.PartidoUpdater;
import es.padelnow.partido.useCases.update.UpdatePartidoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/partidos")
public class PartidoPutController {
    private final PartidoUpdater updater;

    @Autowired
    public PartidoPutController(PartidoUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody String request) {
        updater.update(id, request);
        return new ResponseEntity("DONE", HttpStatus.ACCEPTED);
    }
}
