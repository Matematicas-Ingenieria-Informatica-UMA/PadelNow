package es.padelnow.partido.useCases.create;

import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;
import es.padelnow.partido.Partido;
import es.padelnow.partido.PartidoRepository;
import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartidoCreator {

    private final PartidoRepository partidoRepository;

    private final ParejaRepository parejaRepository;

    private final TorneoRepository torneoRepository;

    @Autowired
    public PartidoCreator(PartidoRepository partidoRepository, ParejaRepository parejaRepository, TorneoRepository torneoRepository) {
        this.partidoRepository = partidoRepository;
        this.parejaRepository = parejaRepository;
        this.torneoRepository = torneoRepository;
    }

    public Partido create(CreatePartidoRequest request) {
        List<Pareja> parejas = parejaRepository.findAllById(request.getParejas());
        Torneo torneo = torneoRepository.getById(request.getTorneo());
        Partido partido = new Partido(
                request.getResultado(),
                request.getFecha(),
                request.getJuezSilla(),
                request.getGenero(),
                request.getFase(),
                torneo,
                parejas
        );
        return partidoRepository.save(partido);
    }
}
