package es.padelnow.pareja.useCases.update;

import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Iterator;
import java.util.Optional;

@Service
public class ParejaUpdater {
    private final ParejaRepository repository;

    @Autowired
    ParejaUpdater(ParejaRepository repository) {
        this.repository = repository;
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
                        case "partidos":
                            //TODO
                            break;
                        case "jugadores":
                            //TODO
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
