package es.padelnow.backend.controller.jugador;

import es.padelnow.core.jugador.useCases.JugadorCreator;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class JugadorPostController {
    JugadorCreator creator;

    public JugadorPostController(JugadorCreator creator) {
        this.creator = creator;
    }

    @PostMapping("/jugador")
    public ResponseEntity create(@RequestBody Request request) {
        return new ResponseEntity(HttpStatus.CREATED);
    }
}

@Getter
@Setter
class Request {
    private String nombre;
    private String apellidos;
    private Sexo sexo;
    private Pais pais;
}
