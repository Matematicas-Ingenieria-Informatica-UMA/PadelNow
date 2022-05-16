package es.padelnow.backend.controller.jugador;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.useCases.find.JugadorFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JugadorGetController {

    JugadorFinder finder;

    @Autowired
    public JugadorGetController(JugadorFinder finder) {
        this.finder = finder;
    }

    @GetMapping("/jugador/{id}")
    public Jugador find(@PathVariable Long id) {
        return finder.find(id);
    }

    @GetMapping("/jugador")
    public List<Jugador> findAll() {
        return finder.findAll();
    }

}
