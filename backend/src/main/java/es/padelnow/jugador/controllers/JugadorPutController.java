package es.padelnow.jugador.controllers;

import es.padelnow.jugador.useCases.update.JugadorUpdater;
import es.padelnow.jugador.useCases.update.UpdateJugadorRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JugadorPutController {

    private final JugadorUpdater updater;

    @Autowired
    public JugadorPutController(JugadorUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/jugador/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody UpdateJugadorRequest request) {
        System.out.println(request.toString());
        updater.update(id, request);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
