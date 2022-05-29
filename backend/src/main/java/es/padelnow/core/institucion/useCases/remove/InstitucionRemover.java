package es.padelnow.core.institucion.useCases.remove;


import es.padelnow.core.institucion.InstitucionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstitucionRemover {
    private final InstitucionRepository repository;

    @Autowired
    public InstitucionRemover(InstitucionRepository repository) {
        this.repository = repository;
    }


    public void remove(Long id) {
        boolean exists = repository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("Institucion with id " + id + " does not exist");
        } else {
            repository.deleteById(id);
        }
    }
}
