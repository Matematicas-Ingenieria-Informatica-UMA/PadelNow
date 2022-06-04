package es.padelnow.partido.useCases.remove;

import es.padelnow.partido.PartidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
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
