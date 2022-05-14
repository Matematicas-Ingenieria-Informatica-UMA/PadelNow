package es.padelnow.core.circuito;

import es.padelnow.core.circuito.Circuito;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CircuitoRepository extends JpaRepository<Circuito,Long> {
    Optional<Circuito> findById(Long id);

}
