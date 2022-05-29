package es.padelnow.backend.controller.circuito;

import es.padelnow.core.circuito.useCases.update.CircuitoUpdater;
import es.padelnow.core.circuito.useCases.update.UpdateCircuitoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CircuitoPutController {
    private final CircuitoUpdater updater;

    @Autowired
    public CircuitoPutController(CircuitoUpdater updater){
        this.updater = updater;
    }

    @PutMapping("/circuito/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody UpdateCircuitoRequest request){
        System.out.println(request.toString());
        updater.update(id, request);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
