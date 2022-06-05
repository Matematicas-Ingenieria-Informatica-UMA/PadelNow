package es.padelnow.jugador.controllers;

import es.padelnow.jugador.useCases.update.JugadorUpdater;
import es.padelnow.jugador.useCases.update.UpdateJugadorRequest;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jugadores")
public class JugadorPutController {

    private final JugadorUpdater updater;

    @Autowired
    public JugadorPutController(JugadorUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody String request) {
        updater.update(id, request);
        return new ResponseEntity("DONE", HttpStatus.ACCEPTED);
    }
}
