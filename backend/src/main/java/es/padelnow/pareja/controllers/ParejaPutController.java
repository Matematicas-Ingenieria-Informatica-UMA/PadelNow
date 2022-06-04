package es.padelnow.pareja.controllers;

import es.padelnow.pareja.useCases.update.ParejaUpdater;
import es.padelnow.pareja.useCases.update.UpdateParejaRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParejaPutController {

    private final ParejaUpdater updater;

    @Autowired
    public ParejaPutController(ParejaUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/pareja/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody UpdateParejaRequest request) {
        System.out.println(request.toString());
        updater.update(id, request);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
