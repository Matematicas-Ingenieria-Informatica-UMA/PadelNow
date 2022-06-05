package es.padelnow.pareja.controllers;

import es.padelnow.pareja.useCases.update.ParejaUpdater;
import es.padelnow.pareja.useCases.update.UpdateParejaRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/parejas")
public class ParejaPutController {

    private final ParejaUpdater updater;

    @Autowired
    public ParejaPutController(ParejaUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody String request) {
        updater.update(id, request);
        return new ResponseEntity("DONE", HttpStatus.ACCEPTED);
    }
}
