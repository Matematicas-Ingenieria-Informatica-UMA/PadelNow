package es.padelnow.keywordSearch.controllers;

import com.google.gson.Gson;
import es.padelnow.jugador.useCases.find.JugadorFinder;
import es.padelnow.noticia.useCases.find.NoticiaFinder;
import es.padelnow.partido.useCases.find.PartidoFinder;
import es.padelnow.torneo.useCases.find.TorneoFinder;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("search/{keyword}")
    public String[] searchByKeyword(@PathVariable String keyword) {

        //List<String> l = new ArrayList<String>();

        String jugadores = new Gson().toJson(jugadorFinder.search(keyword));
        //l.add(jugadores);
        String noticias = new Gson().toJson(noticiaFinder.search(keyword));
        //l.add(noticias);
        String partidos = new Gson().toJson(partidoFinder.search(keyword));
        //l.add(partidos);
        String torneos = new Gson().toJson(torneoFinder.search(keyword));
        //l.add(torneos);

        return new String[] {jugadores, noticias, partidos, torneos};
    }
}
