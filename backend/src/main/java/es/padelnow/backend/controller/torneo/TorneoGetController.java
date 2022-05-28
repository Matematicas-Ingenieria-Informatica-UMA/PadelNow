package es.padelnow.backend.controller.torneo;

import com.sun.xml.bind.v2.TODO;
import es.padelnow.core.torneo.Torneo;
import es.padelnow.core.torneo.useCases.find.TorneoFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TorneoGetController {
    private final TorneoFinder finder;

    @Autowired
    public TorneoGetController(TorneoFinder finder){
        this.finder = finder;
    }

    @GetMapping("/torneo/{id}")
    public Torneo find(@PathVariable Long id) {return  finder.find(id);}

    @GetMapping("/torneo")
    public List<Torneo> findAll() {return finder.findAll();}
}
