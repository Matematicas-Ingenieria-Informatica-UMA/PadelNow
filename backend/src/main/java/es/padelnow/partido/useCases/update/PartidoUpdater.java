package es.padelnow.partido.useCases.update;


import es.padelnow.partido.Partido;
import es.padelnow.partido.PartidoRepository;
import es.padelnow.partido.enums.Fase;
import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Optional;

@Service
public class PartidoUpdater {
    private final PartidoRepository repository;
    private final TorneoRepository torneoRepository;

    @Autowired
    public PartidoUpdater(PartidoRepository repository, TorneoRepository torneoRepo) {
        this.repository = repository;
        this.torneoRepository = torneoRepo;
    }

    public void update(Long id, String request) {
        Optional<Partido> busquedaPartido = repository.findById(id);

        if (busquedaPartido.isPresent()) {
            Partido partido = busquedaPartido.get();
            if (request != null) {

                JSONObject json = new JSONObject(request.trim());
                Iterator<String> it = json.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    switch (key) {
                        case "resultado":
                            partido.setResultado(json.getString(key));
                            break;
                        case "fecha":
                            try {
                                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                                Date d = sdf.parse(json.getString(key));
                                partido.setFecha(d);
                            } catch (ParseException e) {
                                e.printStackTrace();
                            }
                            break;
                        case "juez_silla":
                            partido.setJuezSilla(json.getString(key));
                            break;
                        case "bolas_breaks":
                            partido.setBolasDeBreaks(json.getString(key));
                            break;
                        case "winners":
                            partido.setWinners(json.getString(key));
                            break;
                        case "smashes":
                            partido.setSmashes(json.getString(key));
                            break;
                        case "errores_no_forzados":
                            partido.setErroresNoForzados(json.getString(key));
                            break;
                        case "bolas_oro":
                            partido.setBolasDeOro(json.getString(key));
                            break;
                        case "duracion":
                            partido.setDuracion(json.getString(key));
                            break;
                        case "fase":
                            String fase = json.getString(key);
                            switch (fase) {
                                case "DIECISEISAVOS_DE_FINAL" -> partido.setFase(Fase.DIECISEISAVOS_DE_FINAL);
                                case "OCTAVOS_DE_FINAL" -> partido.setFase(Fase.OCTAVOS_DE_FINAL);
                                case "CUARTOS_DE_FINAL" -> partido.setFase(Fase.CUARTOS_DE_FINAL);
                                case "SEMIFINAL" -> partido.setFase(Fase.SEMIFINAL);
                                case "FINAL" -> partido.setFase(Fase.FINAL);
                            }
                            break;
                        case "torneo":
                            Optional<Torneo> t = torneoRepository.findById(json.getLong(key));
                            t.ifPresent(partido::setTorneo);
                            break;
                    }
                }
                repository.save(partido);
            } else {
                throw new IllegalStateException("PartidoUpdateRequest is null");
            }
        } else {
            throw new IllegalStateException("Partido with id " + id + " does not exist");
        }
    }
}
