package es.padelnow.backend.controller.pareja;

import es.padelnow.core.pareja.useCases.delete.ParejaRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParejaDeleteController {
    private final ParejaRemover remover;

    @Autowired
    public ParejaDeleteController(ParejaRemover remover){
        this.remover = remover;
    }

    @DeleteMapping("/pareja/{id}")
    public ResponseEntity delete (@PathVariable Long id){
        remover.remove(id);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
