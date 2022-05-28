package es.padelnow.backend.controller.partido;

import es.padelnow.core.partido.Partido;
import es.padelnow.core.partido.useCases.create.CreatePartidoRequest;
import es.padelnow.core.partido.useCases.create.PartidoCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class PartidoPostController {
    private final PartidoCreator creator;

    @Autowired
    public PartidoPostController(PartidoCreator creator){
        this.creator = creator;
    }

    @PostMapping("/partido")
    public ResponseEntity create(@RequestBody CreatePartidoRequest request){
        Partido partido = creator.create(request);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
