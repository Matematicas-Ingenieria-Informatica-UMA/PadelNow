package es.padelnow.backend.controller.noticia;

import es.padelnow.core.noticia.useCases.create.NoticiaCreator;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class NoticiaPostController {
    NoticiaCreator creator;

    @Autowired
    public NoticiaPostController(NoticiaCreator creator) {
        this.creator = creator;
    }

    @PostMapping("/noticia")
    public ResponseEntity create(@RequestBody Request request) {
        return new ResponseEntity(HttpStatus.CREATED);
    }
}

@Getter
@Setter
class Request {
    private String titulo;
    private String subtitulo;
    private String cuerpo;
}

