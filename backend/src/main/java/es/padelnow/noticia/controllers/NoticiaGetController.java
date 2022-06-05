package es.padelnow.noticia.controllers;

import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.useCases.find.NoticiaFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/noticias")
public class NoticiaGetController {

    private final NoticiaFinder finder;

    @Autowired
    public NoticiaGetController(NoticiaFinder finder) {
        this.finder = finder;
    }

    @GetMapping("/{id}")
    public Noticia find(@PathVariable Long id) {
        return finder.find(id);
    }

    @GetMapping
    public List<Noticia> findAll() {
        return finder.findAll();
    }

}
