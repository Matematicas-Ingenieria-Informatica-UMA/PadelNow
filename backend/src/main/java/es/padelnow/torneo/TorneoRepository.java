package es.padelnow.torneo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TorneoRepository extends JpaRepository<Torneo, Long> {

    @Query(value = "SELECT t FROM Torneo t WHERE"
            + " LOWER(t.nombre) LIKE LOWER('%:keyword%')"
            + " LIMIT 5", nativeQuery = true)
    List<Torneo> search(@Param(value = "keyword") String keyword);

}
