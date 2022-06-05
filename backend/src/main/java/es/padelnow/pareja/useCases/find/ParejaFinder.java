package es.padelnow.pareja.useCases.find;

import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class ParejaFinder {

    private final ParejaRepository repository;

    @Autowired
    public ParejaFinder(ParejaRepository repository) {
        this.repository = repository;
    }

    public Pareja find(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Pareja> findAll() {
        List<Pareja> parejas = repository.findAll();
        parejas.sort(null);
        return parejas;
    }
}
