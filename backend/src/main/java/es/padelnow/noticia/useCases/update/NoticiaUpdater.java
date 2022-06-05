package es.padelnow.noticia.useCases.update;

import es.padelnow.noticia.Noticia;

import es.padelnow.noticia.NoticiaRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Optional;

@Service
public class NoticiaUpdater {
    private final NoticiaRepository repository;

    @Autowired
    public NoticiaUpdater(NoticiaRepository repository) {
        this.repository = repository;
    }


    public void update(Long id, @RequestBody String request) {
        Optional<Noticia> busquedaNoticia = repository.findById(id);
        if (busquedaNoticia.isPresent()) {
            Noticia n = busquedaNoticia.get();
            if (request != null) {

                JSONObject json = new JSONObject(request.trim());
                Iterator<String> it = json.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    switch (key) {
                        case "titulo":
                            n.setTitulo(json.getString(key));
                            break;
                        case "cuerpo":
                            n.setCuerpo(json.getString(key));
                            break;
                        case "subtitulo":
                            n.setSubtitulo(json.getString(key));
                            break;
                        case "foto":
                            n.setFoto(json.getString(key));
                            break;
                        case "fecha":
                            try {
                                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                                Date d = sdf.parse(json.getString(key));
                                n.setFecha(d);
                            } catch (ParseException e) {
                                e.printStackTrace();
                            }
                            break;
                    }
                }

                repository.save(n);
                System.out.println("GUARDADO: " + n.toString());
            } else {
                throw new IllegalStateException("NoticiaUpdateRequest is null");
            }

        } else {
            throw new IllegalStateException("Noticia with id " + id + " does not exist");
        }
    }


//    public void updateNOT(Long id, @RequestBody UpdateNoticiaRequest request) {
//        Optional<Noticia> busquedaNoticia = repository.findById(id);
//        if (busquedaNoticia.isPresent()) {
//            Noticia noticia = busquedaNoticia.get();
//            // TODO: Merge the request and the database data
//            repository.save(noticia);
//        } else {
//            throw new IllegalStateException("Noticia with id " + id + " does not exist");
//        }
//    }
}
