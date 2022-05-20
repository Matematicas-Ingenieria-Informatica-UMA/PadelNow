package es.padelnow.core.partido.useCases.create;

import es.padelnow.core.partido.Partido;
import es.padelnow.core.partido.PartidoRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PartidoCreator {

    private final PartidoRepository repository;

    @Autowired
    public PartidoCreator(PartidoRepository repository){
        this.repository = repository;
    }

    public Partido create(CreatePartidoRequest request){
        Partido partido = new Partido(request.getResultado(), request.getFecha(), request.getJuez_silla(), request.getBolas_breaks(), request.getWinners(), request.getSmashes(), request.getErrores_no_forzados(), request.getBolas_oro(), request.getDuracion(), request.getFase(), request.getTorneo(), request.getParejas());
        return repository.save(partido);
    }
}
