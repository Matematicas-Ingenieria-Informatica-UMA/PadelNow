package es.padelnow.core.partido.useCases.remove;

import es.padelnow.core.partido.PartidoRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PartidoRemover {

    private final PartidoRepository repository;

    @Autowired
    public PartidoRemover(PartidoRepository repository) {
        this.repository = repository;
    }

    public void remove(Long id) {
        this.repository.deleteById(id);
    }
}
