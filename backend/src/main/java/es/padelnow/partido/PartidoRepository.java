package es.padelnow.partido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartidoRepository extends JpaRepository<Partido, Long> {

    @Query(value = "SELECT p FROM Partido p WHERE"
            + " LOWER(p.resultado) LIKE LOWER('%:keyword%')"
            + " OR LOWER(p.fase) LIKE LOWER('%:keyword%')"
            + " OR LOWER(p.winners) LIKE LOWER('%:keyword%')"
            + " LIMIT 5", nativeQuery = true)
    List<Partido> search(@Param(value = "keyword") String keyword);

}
