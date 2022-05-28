package es.padelnow.backend.controller.circuito;

import es.padelnow.core.circuito.useCases.delete.CircuitoRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CircuitoDeleteController {
    private final CircuitoRemover remover;

    @Autowired
    public CircuitoDeleteController(CircuitoRemover remover){
        this.remover = remover;
    }

    @DeleteMapping("/circuito/{id}")
    public ResponseEntity delete (@PathVariable Long id){
        remover.remove(id);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
