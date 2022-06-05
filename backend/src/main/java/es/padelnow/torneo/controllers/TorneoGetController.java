package es.padelnow.torneo.controllers;

import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.useCases.find.TorneoFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/torneos")
public class TorneoGetController {
    private final TorneoFinder finder;

    @Autowired
    public TorneoGetController(TorneoFinder finder) {
        this.finder = finder;
    }

    @GetMapping("/{id}")
    public Torneo find(@PathVariable Long id) {
        return finder.find(id);
    }

    @GetMapping
    public List<Torneo> findAll() {
        return finder.findAll();
    }
}
