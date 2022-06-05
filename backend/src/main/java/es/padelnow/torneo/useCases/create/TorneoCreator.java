package es.padelnow.torneo.useCases.create;

import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TorneoCreator {
    private final TorneoRepository repository;

    @Autowired
    public TorneoCreator(TorneoRepository repository) {
        this.repository = repository;
    }

    public Torneo create(CreateTorneoRequest request) {
        Torneo torneo = new Torneo(request.getNombre(), request.getFechaInicial(), request.getFechaFinal(), request.getFaseInicial(), request.getGenero());
        return repository.save(torneo);
    }
}
