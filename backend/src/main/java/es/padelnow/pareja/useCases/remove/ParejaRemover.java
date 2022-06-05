package es.padelnow.pareja.useCases.remove;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

@Service
public class ParejaRemover {

    private final ParejaRepository parejaRepository;

    @Autowired
    ParejaRemover(ParejaRepository parejaRepository) {
        this.parejaRepository = parejaRepository;
    }

    public void remove(Long id) {

        this.parejaRepository.deleteById(id);
    }

    public void disable(Long id) {
        Optional<Pareja> parejaOptional = this.parejaRepository.findById(id);
        if (parejaOptional.isPresent()) {
            Pareja pareja = parejaOptional.get();
            pareja.setActiva(false);
            this.parejaRepository.save(pareja);
        }
    }
}
