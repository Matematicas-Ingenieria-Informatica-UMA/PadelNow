package es.padelnow.core.jugador;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JugadorRepository extends JpaRepository<Jugador, Long> {

    
}
