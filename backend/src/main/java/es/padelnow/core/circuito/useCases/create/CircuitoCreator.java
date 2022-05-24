package es.padelnow.core.circuito.useCases.create;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.circuito.Genero;
import es.padelnow.core.circuito.CircuitoRepository;
import es.padelnow.core.institucion.Institucion;
import es.padelnow.core.torneo.Torneo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

import java.util.Collection;

@Service
public class CircuitoCreator {

    private final CircuitoRepository repository;

    @Autowired
    public CircuitoCreator(CircuitoRepository repository) {
        this.repository = repository;
    }


    public Circuito create(CreateCircuitoRequest request) {
        Circuito circuito = new Circuito(request.getNombre(), request.getAno(), request.getGenero(), request.getInstitucion());
        return repository.save(circuito);
    }
}
