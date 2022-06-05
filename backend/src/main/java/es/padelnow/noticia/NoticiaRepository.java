package es.padelnow.noticia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticiaRepository extends JpaRepository<Noticia, Long> {

    @Query(value = "SELECT n FROM Noticia n WHERE"
            + " LOWER(n.titulo) LIKE LOWER('%:keyword%')"
            + " OR LOWER(n.cuerpo) LIKE LOWER('%:keyword%')"
            + " OR LOWER(n.subtitulo) LIKE LOWER('%:keyword%')"
            + " LIMIT 5", nativeQuery = true)
    List<Noticia> search(@Param(value = "keyword") String Keyword);
}
