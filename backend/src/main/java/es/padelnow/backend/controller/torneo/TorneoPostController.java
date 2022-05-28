package es.padelnow.backend.controller.torneo;

import es.padelnow.core.torneo.Torneo;
import es.padelnow.core.torneo.useCases.create.CreateTorneoRequest;
import es.padelnow.core.torneo.useCases.create.TorneoCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class TorneoPostController {
    private final TorneoCreator creator;

    @Autowired
    public TorneoPostController (TorneoCreator creator){
        this.creator = creator;
    }

    @PostMapping("/torneo")
    public ResponseEntity create (@RequestBody CreateTorneoRequest request){
        Torneo torneo = creator.create(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }

}
