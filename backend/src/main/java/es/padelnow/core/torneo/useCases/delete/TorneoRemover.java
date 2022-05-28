package es.padelnow.core.torneo.useCases.delete;

import es.padelnow.core.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class TorneoRemover {

    private final TorneoRepository repository;

    @Autowired
    public TorneoRemover(TorneoRepository repository){
        this.repository = repository;
    }

    public void remove(Long id){
        this.repository.deleteById(id);
    }
}
