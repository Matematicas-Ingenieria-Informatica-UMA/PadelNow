package es.padelnow.noticia.controllers;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.useCases.update.NoticiaUpdater;
import es.padelnow.noticia.useCases.update.UpdateNoticiaRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/noticias")
public class NoticiaPutController {

    private final NoticiaUpdater updater;

    @Autowired
    public NoticiaPutController(NoticiaUpdater updater) {
        this.updater = updater;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Noticia> update(@PathVariable Long id, @RequestBody String request) {
        updater.update(id, request);
        return new ResponseEntity("DONE", HttpStatus.ACCEPTED);
    }

}
