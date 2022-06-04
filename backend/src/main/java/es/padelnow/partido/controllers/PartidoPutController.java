package es.padelnow.partido.controllers;

import es.padelnow.partido.useCases.update.PartidoUpdater;
import es.padelnow.partido.useCases.update.UpdatePartidoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PartidoPutController {
    private final PartidoUpdater updater;

    @Autowired
    public PartidoPutController(PartidoUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/partido/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody UpdatePartidoRequest request) {
        System.out.println(request.toString());
        updater.update(id, request);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
