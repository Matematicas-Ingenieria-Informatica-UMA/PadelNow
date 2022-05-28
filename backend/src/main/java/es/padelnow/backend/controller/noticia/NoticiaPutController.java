package es.padelnow.backend.controller.noticia;

import es.padelnow.core.noticia.useCases.update.NoticiaUpdater;
import es.padelnow.core.noticia.useCases.update.UpdateNoticiaRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoticiaPutController {

    private final NoticiaUpdater updater;

    @Autowired
    public NoticiaPutController(NoticiaUpdater updater){
        this.updater = updater;
    }

    @PutMapping("/noticia/{id}")
    public ResponseEntity update (@PathVariable Long id, @RequestBody UpdateNoticiaRequest request){
        System.out.println(request.toString());
        updater.update(id, request);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

}
