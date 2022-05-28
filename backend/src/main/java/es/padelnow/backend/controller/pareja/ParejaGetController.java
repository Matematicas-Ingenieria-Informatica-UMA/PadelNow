package es.padelnow.backend.controller.pareja;

import es.padelnow.core.pareja.Pareja;
import es.padelnow.core.pareja.useCases.find.ParejaFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ParejaGetController {
    private final ParejaFinder finder;

    @Autowired
    public ParejaGetController(ParejaFinder finder){
        this.finder = finder;
    }

    @GetMapping("/pareja/{id}")
    public Pareja find(@PathVariable Long id){ return finder.find(id);}

    @GetMapping("/pareja")
    public List<Pareja> findAll() {return  finder.findAll();}
}
