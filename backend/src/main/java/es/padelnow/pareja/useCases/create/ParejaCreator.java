package es.padelnow.pareja.useCases.create;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParejaCreator {
    private final ParejaRepository parejaRepository;

    private final JugadorRepository jugadorRepository;

    @Autowired
    public ParejaCreator(ParejaRepository parejaRepository, JugadorRepository jugadorRepository) {
        this.parejaRepository = parejaRepository;
        this.jugadorRepository = jugadorRepository;
    }

    public Pareja create(CreateParejaRequest request) {
        List<Jugador> jugadores = jugadorRepository.findAllById(request.getJugadores());
        Pareja pareja = new Pareja(request.getEntrenador(), request.getGenero(), jugadores);
        return parejaRepository.save(pareja);
    }
}
