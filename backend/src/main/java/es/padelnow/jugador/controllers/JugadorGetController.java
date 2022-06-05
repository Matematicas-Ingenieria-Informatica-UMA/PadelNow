package es.padelnow.jugador.controllers;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.useCases.find.JugadorFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/jugadores")
public class JugadorGetController {

    JugadorFinder finder;

    @Autowired
    public JugadorGetController(JugadorFinder finder) {
        this.finder = finder;
    }

    @GetMapping("/{id}")
    public Jugador find(@PathVariable Long id) {
        return finder.find(id);
    }

    @GetMapping
    public List<Jugador> findAll() {
        return finder.findAll();
    }

}
