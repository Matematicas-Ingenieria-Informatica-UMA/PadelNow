package es.padelnow.noticia.controllers;

import es.padelnow.noticia.useCases.remove.NoticiaRemover;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoticiaDeleteController {

    private final NoticiaRemover remover;

    @Autowired
    public NoticiaDeleteController(NoticiaRemover remover) {
        this.remover = remover;
    }

    @DeleteMapping("/noticia/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        remover.remove(id);
        return new ResponseEntity<>("DONE", HttpStatus.ACCEPTED);
    }

}
