package es.padelnow.core.torneo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TorneoRepository extends JpaRepository<Torneo, Long>{

    @Query("SELECT t FROM Torneo t WHERE"
            + " LOWER(t.nombre) LIKE LOWER('%:keyword%')"
            + " LIMIT 3")
    List<Torneo> search(@Param(value = "keyword") String keyword);

}
