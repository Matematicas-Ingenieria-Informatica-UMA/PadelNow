package es.padelnow.backend.controller.circuito;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.circuito.useCases.find.CircuitoFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CircuitoGetController {
    private final CircuitoFinder finder;

    @Autowired
    public  CircuitoGetController(CircuitoFinder finder){
        this.finder = finder;
    }

    @GetMapping("/circuito/{id}")
    public Circuito find (@PathVariable Long id){ return finder.find(id);}

    @GetMapping("/circuito")
    public List<Circuito> findAll () {return  finder.findAll();}
}
