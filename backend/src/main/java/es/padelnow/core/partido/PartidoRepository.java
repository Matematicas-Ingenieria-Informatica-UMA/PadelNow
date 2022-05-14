package es.padelnow.core.partido;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface PartidoRepository extends JpaRepository<Partido, Long>{
}
