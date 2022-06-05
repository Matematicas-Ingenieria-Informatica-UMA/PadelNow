package es.padelnow.torneo.useCases.update;

import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.Optional;

@Service
public class TorneoUpdater {
    private final TorneoRepository repository;

    @Autowired
    public TorneoUpdater(TorneoRepository repository) {
        this.repository = repository;
    }

    public void update(Long id, UpdateTorneoRequest request) {
        Optional<Torneo> busquedaTorneo = repository.findById(id);

        if (busquedaTorneo.isPresent()) {
            Torneo torneo = busquedaTorneo.get();
            //TODO: Merge the request and the database data
            if (request != null) {

                JSONObject json = new JSONObject(request);
                Iterator<String> it = json.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    switch (key) {
                        //TODO: Fix differences between attributes of UpdateTorneoRequest and Torneo
                    }
                }
                repository.save(torneo);
            } else {
                throw new IllegalStateException("TorneoUpdateRequest is null");
            }

        }else {
            throw new IllegalStateException("Torneo with id " + id + " does not exist");
        }
    }
}
