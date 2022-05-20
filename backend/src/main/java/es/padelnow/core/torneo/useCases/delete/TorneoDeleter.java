package es.padelnow.core.torneo.useCases.delete;

import es.padelnow.core.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class TorneoDeleter {

    private final TorneoRepository repository;

    @Autowired
    public TorneoDeleter(TorneoRepository repository){
        this.repository = repository;
    }

    public void delete(Long id){
        this.repository.deleteById(id);
    }
}
