package es.padelnow.core.circuito.useCases.update;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.circuito.CircuitoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CircuitoUpdater {

    private final CircuitoRepository repository;

    @Autowired
    public CircuitoUpdater(CircuitoRepository repository) {
        this.repository = repository;
    }

    public void update(Long id, UpdateCircuitoRequest request){

        Optional<Circuito> busquedaCircuito = repository.findById(id);

        if(busquedaCircuito.isPresent()){
            Circuito circuito = busquedaCircuito.get();
            //TODO: Merge the request and the database data
            repository.save(circuito);
        }else {
            throw new IllegalStateException("Circuito with id " + id + " does not exists");
        }

    }
}
