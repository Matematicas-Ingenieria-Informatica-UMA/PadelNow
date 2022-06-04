package es.padelnow.partido.useCases.update;


import es.padelnow.partido.Partido;
import es.padelnow.partido.PartidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PartidoUpdater {
    private final PartidoRepository repository;

    @Autowired
    public PartidoUpdater(PartidoRepository repository) {
        this.repository = repository;
    }

    public void update(Long id, UpdatePartidoRequest request) {
        Optional<Partido> busquedaPartido = repository.findById(id);

        if (busquedaPartido.isPresent()) {
            Partido partido = busquedaPartido.get();
            //TODO: Merge the request and the database data
            repository.save(partido);
        } else {
            throw new IllegalStateException("Partido with id " + id + " does not exist");
        }
    }
}
