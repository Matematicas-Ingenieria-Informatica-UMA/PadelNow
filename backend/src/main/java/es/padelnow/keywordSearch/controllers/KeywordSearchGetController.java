package es.padelnow.keywordSearch.controllers;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.useCases.find.JugadorFinder;
import es.padelnow.noticia.Noticia;
import es.padelnow.noticia.useCases.find.NoticiaFinder;
import es.padelnow.partido.Partido;
import es.padelnow.partido.useCases.find.PartidoFinder;
import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.useCases.find.TorneoFinder;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KeywordSearchGetController {
    private final JugadorFinder jugadorFinder;
    private final NoticiaFinder noticiaFinder;
    private final PartidoFinder partidoFinder;
    private final TorneoFinder torneoFinder;


    public KeywordSearchGetController(JugadorFinder jugadorFinder, NoticiaFinder noticiaFinder, PartidoFinder partidoFinder, TorneoFinder torneoFinder) {
        this.jugadorFinder = jugadorFinder;
        this.noticiaFinder = noticiaFinder;
        this.partidoFinder = partidoFinder;
        this.torneoFinder = torneoFinder;
    }

    /*@GetMapping("search/{keyword}")
    public List<JSONObject> searchByKeyword(@PathVariable String keyword) {
        List<Jugador> jugadores = jugadorFinder.search(keyword);
        List<Noticia> noticias = noticiaFinder.search(keyword);
        List<Partido> partidos = partidoFinder.search(keyword);
        List<Torneo> torneos = torneoFinder.search(keyword);
        JSONArray jsonA = JSONArray.fromObject(jugadores);

    }*/


}
