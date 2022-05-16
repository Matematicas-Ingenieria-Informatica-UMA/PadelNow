package es.padelnow.core.noticia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticiaRepository extends JpaRepository<Noticia, Long> {

    @Query("SELECT n FROM Noticia n WHERE"
            + " LOWER(n.titulo) LIKE LOWER('%?1%')"
            + " OR LOWER(n.cuerpo) LIKE LOWER('%?1%')")
    List<Noticia> search(String Keyword);

}
