package es.padelnow.core.pareja.useCases.delete;

import es.padelnow.core.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ParejaDeleter {

    private final ParejaRepository repository;

    @Autowired
    ParejaDeleter(ParejaRepository repository){
        this.repository = repository;
    }

    public void delete(Long id){
        this.repository.deleteById(id);
    }
}
