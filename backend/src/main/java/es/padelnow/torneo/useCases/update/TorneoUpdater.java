package es.padelnow.torneo.useCases.update;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import es.padelnow.jugador.Jugador;
import es.padelnow.partido.Partido;
import es.padelnow.partido.PartidoRepository;
import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import javax.servlet.http.Part;
import java.lang.reflect.Type;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class TorneoUpdater {
    private final TorneoRepository repository;
    private final PartidoRepository partidoRepository;

    @Autowired
    public TorneoUpdater(TorneoRepository repository, PartidoRepository pr) {
        this.repository = repository;
        this.partidoRepository = pr;
    }

    public void update(Long id, String request) {
        Optional<Torneo> busquedaTorneo = repository.findById(id);

        if (busquedaTorneo.isPresent()) {
            Torneo torneo = busquedaTorneo.get();
            if (request != null) {

                JSONObject json = new JSONObject(request.trim());
                Iterator<String> it = json.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    switch (key) {
                        case "nombre":
                            torneo.setNombre(json.getString(key));
                            break;
                        case "fechaInicial":
                            try {
                                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                                Date d = sdf.parse(json.getString(key));
                                torneo.setFechaInicial(d);
                            } catch (ParseException e) {
                                e.printStackTrace();
                            }
                            break;
                        case "fechaFinal":
                            try {
                                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                                Date d = sdf.parse(json.getString(key));
                                torneo.setFechaFinal(d);
                            } catch (ParseException e) {
                                e.printStackTrace();
                            }
                            break;
                        case "partidos":
                            boolean ok = true;
                            JSONArray ja = json.getJSONArray(key);
                            List<Object> l = ja.toList();
                            Collection<Partido> partidos = new ArrayList<>();
                            for (Object o : l){
                                Long oid = Long.valueOf(o.toString());
                                Optional<Partido> j = partidoRepository.findById(oid);
                                if (j.isPresent()) {
                                    partidos.add(j.get());
                                } else {
                                    ok = false;
                                }
                            }
                            if (ok) {
                                torneo.setPartidos(partidos);
                            }
                            break;
                    }
                }
                repository.save(torneo);
            } else {
                throw new IllegalStateException("TorneoUpdateRequest is null");
            }

        } else {
            throw new IllegalStateException("Torneo with id " + id + " does not exist");
        }
    }
}
