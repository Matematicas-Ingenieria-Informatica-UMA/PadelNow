package es.padelnow.core.noticia.useCases.update;

import es.padelnow.core.noticia.Noticia;

import java.net.MalformedURLException;
import java.net.URL;

import org.json.JSONException;
import org.json.JSONObject;
import es.padelnow.core.noticia.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Iterator;

@Service
public class NoticiaUpdater {
    private final NoticiaRepository repository;

    @Autowired
    public NoticiaUpdater(NoticiaRepository repository) {
        this.repository = repository;
    }

    public void update(Long id, @RequestBody String request) {
        Noticia n = repository.getById(id);
        try {
            JSONObject json = new JSONObject(request);
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
                    case "autor":
                        n.setAutor(json.getString(key));
                        break;
                    case "subtitulo":
                        n.setSubtitulo(json.getString(key));
                        break;
                    case "foto":
                        try {
                            n.setFoto(new URL(json.getString(key)));
                        } catch (MalformedURLException e) {
                            e.printStackTrace();
                        }
                        break;
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

}
