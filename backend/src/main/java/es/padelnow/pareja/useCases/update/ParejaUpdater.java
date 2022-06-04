package es.padelnow.pareja.useCases.update;

import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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
            repository.save(pareja);
        } else {
            throw new IllegalStateException("Pareja with id " + id + " does not exist");
        }
    }
}
