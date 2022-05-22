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


    public void create(String nombre, Date ano, Genero genero) {
    }
}
