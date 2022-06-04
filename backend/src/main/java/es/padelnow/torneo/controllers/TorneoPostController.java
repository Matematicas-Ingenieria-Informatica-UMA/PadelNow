package es.padelnow.torneo.controllers;

import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.useCases.create.CreateTorneoRequest;
import es.padelnow.torneo.useCases.create.TorneoCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TorneoPostController {
    private final TorneoCreator creator;

    @Autowired
    public TorneoPostController(TorneoCreator creator) {
        this.creator = creator;
    }

    @PostMapping("/torneo")
    public ResponseEntity<Torneo> create(@RequestBody CreateTorneoRequest request) {
        Torneo torneo = creator.create(request);
        return new ResponseEntity<>(torneo, HttpStatus.CREATED);
    }

}
