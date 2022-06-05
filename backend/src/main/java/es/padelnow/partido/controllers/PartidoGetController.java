package es.padelnow.partido.controllers;

import es.padelnow.partido.Partido;
import es.padelnow.partido.useCases.find.PartidoFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/partidos")
public class PartidoGetController {
    private final PartidoFinder finder;

    @Autowired
    public PartidoGetController(PartidoFinder finder) {
        this.finder = finder;
    }

    @GetMapping("/{id}")
    public Partido find(@PathVariable Long id) {
        return finder.find(id);
    }

    @GetMapping
    public List<Partido> findAll() {
        return finder.findAll();
    }

}
