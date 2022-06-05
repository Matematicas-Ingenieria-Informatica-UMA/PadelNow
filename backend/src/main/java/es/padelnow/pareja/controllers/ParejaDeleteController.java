package es.padelnow.pareja.controllers;

import es.padelnow.pareja.useCases.remove.ParejaRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/parejas")
public class ParejaDeleteController {
    private final ParejaRemover remover;

    @Autowired
    public ParejaDeleteController(ParejaRemover remover) {
        this.remover = remover;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id, @RequestParam(required = false) boolean kill) {
        if (kill)
            remover.remove(id);
        else
            remover.disable(id);
        return new ResponseEntity<>("DONE", HttpStatus.ACCEPTED);
    }
}
