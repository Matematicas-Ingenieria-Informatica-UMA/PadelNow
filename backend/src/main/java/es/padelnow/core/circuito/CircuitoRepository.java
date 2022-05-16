package es.padelnow.core.circuito;

import es.padelnow.core.circuito.Circuito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CircuitoRepository extends JpaRepository<Circuito,Long> {

}
