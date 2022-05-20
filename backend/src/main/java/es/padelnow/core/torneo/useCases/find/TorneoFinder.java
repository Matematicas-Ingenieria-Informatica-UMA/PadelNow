package es.padelnow.core.torneo.useCases.find;

import es.padelnow.core.torneo.Torneo;
import es.padelnow.core.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TorneoFinder {
    private final TorneoRepository repository;

    @Autowired
    public TorneoFinder(TorneoRepository repository){
        this.repository = repository;
    }

    public Torneo find(Long id){
        return this.repository.findById(id).orElse(null);
    }

    public List<Torneo> findAll(){
        return this.repository.findAll();
    }
}
