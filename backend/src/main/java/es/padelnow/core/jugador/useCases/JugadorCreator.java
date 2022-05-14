package es.padelnow.core.jugador.useCases;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.jugador.JugadorRepository;
import es.padelnow.core.jugador.enums.Pais;
import es.padelnow.core.jugador.enums.Sexo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public final class JugadorCreator {

    private JugadorRepository repository;

    @Autowired
    public JugadorCreator(JugadorRepository repository) {
        this.repository = repository;
    }


    public Jugador create(String nombre, String apellido, Sexo sexo, Pais pais) {
        Jugador jugador = new Jugador(nombre, apellido, sexo, pais);

        return repository.save(jugador);
    }
}
