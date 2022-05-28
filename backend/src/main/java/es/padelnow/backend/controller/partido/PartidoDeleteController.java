package es.padelnow.backend.controller.partido;

import es.padelnow.core.partido.useCases.delete.PartidoRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PartidoDeleteController {
    private final PartidoRemover remover;

    @Autowired
    public PartidoDeleteController(PartidoRemover remover){
        this.remover = remover;
    }

    @DeleteMapping("/partido/{id}")
    public ResponseEntity delete (@PathVariable Long id){
        remover.remove(id);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
