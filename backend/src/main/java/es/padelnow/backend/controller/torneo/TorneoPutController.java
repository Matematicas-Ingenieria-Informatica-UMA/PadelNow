package es.padelnow.backend.controller.torneo;


import es.padelnow.core.torneo.useCases.update.TorneoUpdater;
import es.padelnow.core.torneo.useCases.update.UpdateTorneoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class TorneoPutController {
    private final TorneoUpdater updater;

    @Autowired
    public TorneoPutController(TorneoUpdater updater){
        this.updater = updater;
    }

    @PutMapping("/torneo/{id}")
    public ResponseEntity update(@PathVariable Long id, @RequestBody UpdateTorneoRequest request){
        System.out.println(request.toString());
        updater.update(id, request);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
