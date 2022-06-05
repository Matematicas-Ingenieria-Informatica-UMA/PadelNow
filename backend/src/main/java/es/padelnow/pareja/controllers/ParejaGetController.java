package es.padelnow.pareja.controllers;

import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.useCases.find.ParejaFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/parejas")
public class ParejaGetController {
    private final ParejaFinder finder;

    @Autowired
    public ParejaGetController(ParejaFinder finder) {
        this.finder = finder;
    }

    @GetMapping("/{id}")
    public Pareja find(@PathVariable Long id) {
        return finder.find(id);
    }

    @GetMapping
    public List<Pareja> findAll() {
        return this.finder.findAll();
    }
}
