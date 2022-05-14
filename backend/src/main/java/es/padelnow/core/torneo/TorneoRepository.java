package es.padelnow.core.torneo;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TorneoRepository extends JpaRepository<Torneo, Long>{

}
