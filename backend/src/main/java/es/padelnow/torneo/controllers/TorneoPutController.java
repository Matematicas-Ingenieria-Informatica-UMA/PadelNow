package es.padelnow.torneo.controllers;


import es.padelnow.torneo.useCases.update.TorneoUpdater;
import es.padelnow.torneo.useCases.update.UpdateTorneoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/torneos")
public class TorneoPutController {
    private final TorneoUpdater updater;

    @Autowired
    public TorneoPutController(TorneoUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody String request) {
        updater.update(id, request);
        return new ResponseEntity("DONE", HttpStatus.ACCEPTED);
    }
}
