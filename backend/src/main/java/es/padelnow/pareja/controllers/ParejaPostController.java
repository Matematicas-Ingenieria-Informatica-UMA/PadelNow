package es.padelnow.pareja.controllers;

import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.useCases.create.CreateParejaRequest;
import es.padelnow.pareja.useCases.create.ParejaCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parejas")
public class ParejaPostController {
    private final ParejaCreator creator;

    @Autowired
    public ParejaPostController(ParejaCreator creator) {
        this.creator = creator;
    }

    @PostMapping
    public ResponseEntity<Pareja> create(@RequestBody CreateParejaRequest request) {
        Pareja pareja = creator.create(request);

        return new ResponseEntity<>(pareja, HttpStatus.CREATED);
    }
}
