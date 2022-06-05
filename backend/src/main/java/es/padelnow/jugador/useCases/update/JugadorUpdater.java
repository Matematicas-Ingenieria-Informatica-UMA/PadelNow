package es.padelnow.jugador.useCases.update;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Optional;


@Service
public class JugadorUpdater {

    private final JugadorRepository repository;

    @Autowired
    public JugadorUpdater(JugadorRepository repository) {
        this.repository = repository;
    }

    public void update(Long id, String request) {
        Optional<Jugador> busquedaJugador = repository.findById(id);
        if (busquedaJugador.isPresent()) {
            Jugador jugador = busquedaJugador.get();
            // TODO: Merge the request and the database data
            // PROPUESTA DE UPDATE
            if (request != null) {

                JSONObject json = new JSONObject(request.trim());
                Iterator<String> it = json.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    switch (key) {
                        case "nombre":
                            jugador.setNombre(json.getString(key));
                            break;
                        case "apellidos":
                            jugador.setApellidos(json.getString(key));
                            break;
                        case "sexo":
                            if (json.getString(key).equals("MASCULINO")) {
                                jugador.setSexo(Sexo.MASCULINO);
                            } else if (json.getString(key).equals("FEMENINO")) {
                                jugador.setSexo(Sexo.FEMENINO);
                            }
                            break;
                        case "foto":
                            jugador.setFoto(json.getString(key));
                            break;
                        case "altura":
                            jugador.setAltura(json.getFloat(key));
                            break;
                        case "pais":
                            jugador.setPais(json.getString(key));
                            break;
                        case "ciudad":
                            jugador.setCiudad(json.getString(key));
                            break;
                        case "fechaNacimiento":
                            try {
                                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                                Date d = sdf.parse(json.getString(key));
                                jugador.setFechaNacimiento(d);
                            } catch (ParseException e) {
                                e.printStackTrace();
                            }
                            break;
                        case "brazoDominante":
                            if (json.getString(key).equals("ZURDO")) {
                                jugador.setBrazoDominante(BrazoDominante.ZURDO);
                            } else if (json.getString(key).equals("DIESTRO")) {
                                jugador.setBrazoDominante(BrazoDominante.DIESTRO);
                            }
                            break;
                        case "posicionDeJuego":
                            if (json.getString(key).equals("DERECHA")) {
                                jugador.setPosicionDeJuego(PosicionDeJuego.DERECHA);
                            } else if (json.getString(key).equals("REVES")) {
                                jugador.setPosicionDeJuego(PosicionDeJuego.REVES);
                            }
                            break;
                    }
                }

                repository.save(jugador);
                System.out.println("GUARDADO: " + jugador.toString());
            } else {
                throw new IllegalStateException("JugadorUpdateRequest is null");
            }

        } else {
            throw new IllegalStateException("Jugador with id " + id + " does not exist");
        }
    }
}
