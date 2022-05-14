package es.padelnow.core.noticia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NoticiaRepository extends JpaRepository<Noticia, Long>{

    Optional<Noticia> findById (Long Id);

    // NO SE SI FUNCIONA
    // TODO
    @Query("SELECT n FROM Noticia n WHERE (n.cuerpo LIKE %?1% IGNORECASE) OR (n.titulo LIKE %?1% IGNORECASE)")
    List<Noticia> searchByCuerpoOrTituloIgnoreCase(String keyword);

    // List<Noticia> findByCuerpoIgnoreCaseContaining(String keyword);


}
