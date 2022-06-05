package es.padelnow.partido.controllers;

import es.padelnow.partido.Partido;
import es.padelnow.partido.useCases.create.CreatePartidoRequest;
import es.padelnow.partido.useCases.create.PartidoCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/partidos")
public class PartidoPostController {
    private final PartidoCreator creator;

    @Autowired
    public PartidoPostController(PartidoCreator creator) {
        this.creator = creator;
    }

    @PostMapping
    public ResponseEntity<Partido> create(@RequestBody CreatePartidoRequest request) {
        Partido partido = creator.create(request);
        return new ResponseEntity<>(partido, HttpStatus.CREATED);
    }

}
