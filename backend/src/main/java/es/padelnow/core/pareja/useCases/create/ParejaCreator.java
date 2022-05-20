package es.padelnow.core.pareja.useCases.create;

import es.padelnow.core.pareja.Pareja;
import es.padelnow.core.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ParejaCreator {
    private final ParejaRepository repository;

    @Autowired
    public ParejaCreator(ParejaRepository repository){
        this.repository = repository;
    }

    public Pareja create(CreateParejaRequest request){
        Pareja pareja = new Pareja(request.getTemporadas_activo(), request.getEntrenador(), request.getPartidos(), request.getJugadores());
        return repository.save(pareja);
    }
}
