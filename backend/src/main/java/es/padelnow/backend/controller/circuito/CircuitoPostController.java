package es.padelnow.backend.controller.circuito;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.circuito.useCases.create.CircuitoCreator;
import es.padelnow.core.circuito.useCases.create.CreateCircuitoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class CircuitoPostController {
    private final CircuitoCreator creator;

    @Autowired
    public CircuitoPostController (CircuitoCreator creator){
        this.creator = creator;
    }

    @PostMapping("/circuito")
    public ResponseEntity create(@RequestBody CreateCircuitoRequest request){
        Circuito circuito = creator.create(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}
