package es.padelnow.pareja.useCases.update;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.lang.reflect.Type;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;

import java.util.*;

@Service
public class ParejaUpdater {
    private final ParejaRepository repository;
    private final JugadorRepository jugadorRepository;

    @Autowired
    ParejaUpdater(ParejaRepository repository, JugadorRepository jr) {
        this.repository = repository;
        this.jugadorRepository = jr;
    }

    public void update(Long id, @RequestBody String request) {
        Optional<Pareja> busquedaPareja = repository.findById(id);
        if (busquedaPareja.isPresent()) {
            Pareja pareja = busquedaPareja.get();

            if (request != null) {

                JSONObject json = new JSONObject(request.trim());
                Iterator<String> it = json.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    switch (key) {
                        case "genero":
                            String genero = json.getString(key);
                            switch (genero) {
                                case "FEMENINO" -> pareja.setGenero(Sexo.FEMENINO);
                                case "MASCULINO" -> pareja.setGenero(Sexo.MASCULINO);
                            }
                            break;
                        case "entrenador":
                            pareja.setEntrenador(json.getString(key));
                            break;
                        case "temporadasActivo":
                            pareja.setTemporadasActivo(json.getInt(key));
                            break;
                        case "activa":
                            pareja.setActiva(json.getBoolean(key));
                        case "jugadores":
                            boolean ok = true;
                            JSONArray ja = json.getJSONArray(key);
                            List<Object> l = ja.toList();
                            Collection<Jugador> jugadores = new ArrayList<>();
                            for (Object o : l){
                                Long oid = Long.valueOf(o.toString());
                                Optional<Jugador> j = jugadorRepository.findById(oid);
                                if (j.isPresent()) {
                                    jugadores.add(j.get());
                                } else {
                                    ok = false;
                                }
                            }
                            if (ok) {
                                pareja.setJugadores(jugadores);
                            }
                            break;
                    }
                }
                repository.save(pareja);
            } else {
                throw new IllegalStateException("ParejaUpdateRequest is null");
            }

        } else {
            throw new IllegalStateException("Pareja with id " + id + " does not exist");
        }
    }
}
