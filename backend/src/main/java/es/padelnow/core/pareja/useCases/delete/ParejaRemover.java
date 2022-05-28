package es.padelnow.core.pareja.useCases.delete;

import es.padelnow.core.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ParejaRemover {

    private final ParejaRepository repository;

    @Autowired
    ParejaRemover(ParejaRepository repository){
        this.repository = repository;
    }

    public void remove(Long id){
        this.repository.deleteById(id);
    }
}
