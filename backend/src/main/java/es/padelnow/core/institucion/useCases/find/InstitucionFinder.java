package es.padelnow.core.institucion.useCases.find;

import es.padelnow.core.institucion.Institucion;
import es.padelnow.core.institucion.InstitucionRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class InstitucionFinder {
    private final InstitucionRepository repository;

    @Autowired
    public InstitucionFinder(InstitucionRepository repository) {
        this.repository = repository;
    }

    public Institucion find(Long id) {
        return this.repository.findById(id).orElse(null);
    }

    public List<Institucion> findAll() {
        return this.repository.findAll();
    }
}
