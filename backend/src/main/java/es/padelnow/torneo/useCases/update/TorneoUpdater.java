package es.padelnow.torneo.useCases.update;

import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
            repository.save(torneo);
        } else {
            throw new IllegalStateException("Torneo with id " + id + " does not exist");
        }
    }
}
