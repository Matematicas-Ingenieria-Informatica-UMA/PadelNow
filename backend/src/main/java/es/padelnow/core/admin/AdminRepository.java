package es.padelnow.core.admin;

import es.padelnow.core.jugador.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin,String> {

    Optional<Jugador> findById(Long id);

}
