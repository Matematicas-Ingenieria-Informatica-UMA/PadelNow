package es.padelnow.pareja.useCases.update;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;

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

    public void update(Long id, @RequestBody UpdateParejaRequest request) {
        Optional<Pareja> busquedaPareja = repository.findById(id);
        if (busquedaPareja.isPresent()) {
            Pareja pareja = busquedaPareja.get();
            //TODO: Merge the request and the database data
            if (request != null) {

                JSONObject json = new JSONObject(request);
                Iterator<String> it = json.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    switch (key) {
                        case "temporadas_activo":
                            pareja.setTemporadasActivo(json.getInt(key));
                            break;
                        case "entrenador":
                            pareja.setEntrenador(json.getString(key));
                            break;
                        case "jugadores":
                            boolean ok = true;
                            Type type = new TypeToken<Collection<Long>>() {
                            }.getType();
                            List<Long> inpList = new Gson().fromJson(String.valueOf(json.getLong(key)), type);
                            Collection<Jugador> jugadores = new ArrayList<>();
                            for (Long x : inpList) {
                                Optional<Jugador> j = jugadorRepository.findById(x);
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
