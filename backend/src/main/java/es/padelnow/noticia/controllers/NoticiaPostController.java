package es.padelnow.noticia.controllers;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.useCases.create.CreateNoticiaRequest;
import es.padelnow.noticia.useCases.create.NoticiaCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class NoticiaPostController {
    private final NoticiaCreator creator;

    @Autowired
    public NoticiaPostController(NoticiaCreator creator) {
        this.creator = creator;
    }

    @PostMapping("/noticia")
    public ResponseEntity create(@RequestBody CreateNoticiaRequest request) {
        Noticia noticia = creator.create(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}

