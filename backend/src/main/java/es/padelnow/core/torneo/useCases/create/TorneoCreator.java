package es.padelnow.core.torneo.useCases.create;

import es.padelnow.core.torneo.Torneo;
import es.padelnow.core.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class TorneoCreator {
    private final TorneoRepository repository;

    @Autowired
    public TorneoCreator(TorneoRepository repository){
        this.repository = repository;
    }

    public Torneo create(CreateTorneoRequest request){
        Torneo torneo = new Torneo(request.getNombre(), request.getFase_inicial(), request.getCircuito(), request.getPartidos());
        return repository.save(torneo);
    }
}
