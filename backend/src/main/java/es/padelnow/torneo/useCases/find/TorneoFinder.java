package es.padelnow.torneo.useCases.find;

import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TorneoFinder {
    private final TorneoRepository repository;

    @Autowired
    public TorneoFinder(TorneoRepository repository) {
        this.repository = repository;
    }

    public Torneo find(Long id) {
        return this.repository.findById(id).orElse(null);
    }

    public List<Torneo> findAll() {
        return this.repository.findAll();
    }

    public List<Torneo> search(String keyword) {
        return this.repository.search(keyword);
    }
}
