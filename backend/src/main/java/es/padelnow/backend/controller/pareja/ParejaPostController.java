package es.padelnow.backend.controller.pareja;

import es.padelnow.core.pareja.Pareja;
import es.padelnow.core.pareja.useCases.create.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class ParejaPostController {
    private final ParejaCreator creator;

    @Autowired
    public ParejaPostController(ParejaCreator creator){
        this.creator = creator;
    }

    @PostMapping("/pareja")
    public ResponseEntity create(@RequestBody CreateParejaRequest request){
        Pareja pareja = creator.create(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}
