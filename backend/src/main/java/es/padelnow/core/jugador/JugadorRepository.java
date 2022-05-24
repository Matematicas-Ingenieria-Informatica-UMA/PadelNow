package es.padelnow.core.jugador;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface JugadorRepository extends JpaRepository<Jugador, Long> {

    @Query("SELECT j FROM Jugador j WHERE"
            + " LOWER(j.nombre) LIKE LOWER('%:keyword%')"
            + " OR LOWER(j.apellidos) LIKE LOWER('%:keyword%')"
            + " LIMIT 3")
    List<Jugador> search(@Param(value = "keyword") String keyword);

}
