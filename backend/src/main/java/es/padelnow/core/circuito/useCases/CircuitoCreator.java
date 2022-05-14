package es.padelnow.core.circuito.useCases;
import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.circuito.Genero;
import es.padelnow.core.circuito.CircuitoRepository;
import es.padelnow.core.institucion.Institucion;
import es.padelnow.core.torneo.Torneo;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Date;

import java.util.Collection;

public class CircuitoCreator {

    private CircuitoRepository repository;

    @Autowired
    public CircuitoCreator(CircuitoRepository repository) {
        this.repository = repository;
    }


    public Circuito create(String nombre, Date ano, Genero genero,
                           Institucion institucion) {
        Circuito circuito = new Circuito(nombre, ano, genero, institucion);
        return repository.save(Circuito);
    }
}
