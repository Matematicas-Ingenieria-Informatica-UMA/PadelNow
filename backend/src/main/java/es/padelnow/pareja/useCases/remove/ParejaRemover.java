package es.padelnow.pareja.useCases.remove;

import es.padelnow.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParejaRemover {

    private final ParejaRepository repository;

    @Autowired
    ParejaRemover(ParejaRepository repository) {
        this.repository = repository;
    }

    public void remove(Long id) {
        this.repository.deleteById(id);
    }
}
