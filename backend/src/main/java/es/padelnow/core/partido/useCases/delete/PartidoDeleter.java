package es.padelnow.core.partido.useCases.delete;

import es.padelnow.core.partido.PartidoRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PartidoDeleter {

    private final PartidoRepository repository;

    @Autowired
    public PartidoDeleter(PartidoRepository repository){
        this.repository = repository;
    }

    public void delete(Long id){
        this.repository.deleteById(id);
    }
}
