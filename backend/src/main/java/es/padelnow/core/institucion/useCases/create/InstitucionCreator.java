package es.padelnow.core.institucion.useCases.create;


import es.padelnow.core.institucion.Institucion;
import es.padelnow.core.institucion.InstitucionRepository;
import es.padelnow.core.institucion.useCases.create.CreateInstitucionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstitucionCreator {

    private final InstitucionRepository repository;

    @Autowired
    public InstitucionCreator(InstitucionRepository repository) {
        this.repository = repository;
    }


    public void create(CreateInstitucionRequest request) {
        Institucion institucion = new Institucion(request.getNombre(), request.getFoto(), request.getCircuitos(), request.getPosiciones());

        repository.save(institucion);
    }
}
