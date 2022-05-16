package es.padelnow.backend.controller.noticia;

import es.padelnow.core.noticia.Noticia;
import es.padelnow.core.noticia.useCases.find.NoticiaFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoticiaGetController {

    private final NoticiaFinder finder;

    @Autowired
    public NoticiaGetController(NoticiaFinder finder) {
        this.finder = finder;
    }

    @GetMapping("/noticia/{id}")
    public Noticia find(@PathVariable Long id) {
        return finder.find(id);
    }

    @GetMapping("/noticia")
    public List<Noticia> findAll() {
        return finder.findAll();
    }

}
