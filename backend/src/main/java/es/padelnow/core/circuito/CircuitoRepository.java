package es.padelnow.core.circuito;

import es.padelnow.core.circuito.Circuito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CircuitoRepository extends JpaRepository<Circuito, Long> {
    @Query("SELECT c FROM Circuito c WHERE"
            + " LOWER(c.nombre) LIKE LOWER('%:keyword%')")
    List<Circuito> search(@Param(value = "keyword") String Keyword);

}
