package es.padelnow.torneo.useCases.remove;

import es.padelnow.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TorneoRemover {

    private final TorneoRepository repository;

    @Autowired
    public TorneoRemover(TorneoRepository repository) {
        this.repository = repository;
    }

    public void remove(Long id) {
        this.repository.deleteById(id);
    }
}
