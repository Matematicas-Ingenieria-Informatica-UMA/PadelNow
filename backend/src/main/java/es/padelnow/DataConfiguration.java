package es.padelnow;

import es.padelnow.jugador.Jugador;
import es.padelnow.jugador.JugadorRepository;
import es.padelnow.jugador.enums.BrazoDominante;
import es.padelnow.jugador.enums.PosicionDeJuego;
import es.padelnow.jugador.enums.Sexo;
import es.padelnow.pareja.Pareja;
import es.padelnow.pareja.ParejaRepository;
import es.padelnow.partido.Partido;
import es.padelnow.partido.PartidoRepository;
import es.padelnow.partido.enums.Fase;
import es.padelnow.torneo.Torneo;
import es.padelnow.torneo.TorneoRepository;
import es.padelnow.user.User;
import es.padelnow.user.enums.UserRole;
import es.padelnow.user.useCases.SignUpUserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.text.SimpleDateFormat;
import java.util.List;

@Configuration
public class DataConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(SignUpUserService signUpUserService, JugadorRepository jugadorRepository,
                                        ParejaRepository parejaRepository,
                                        TorneoRepository torneoRepository,
                                        PartidoRepository partidoRepository) {
        return args -> {
            // USERS
            signUpUserService.signUpUser(
                    new User(
                            "alereyleyva",
                            "Alejandro Rey Leyva",
                            "root",
                            UserRole.ADMIN
                    )
            );

            // JUGADORES
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Jugador jugador1 = new Jugador(
                    "Alejandro", "Rey Leyva", Sexo.MASCULINO, 1.80, "es",
                    dateFormat.parse("2001-11-28"), BrazoDominante.DIESTRO, PosicionDeJuego.DERECHA);
            Jugador jugador2 = new Jugador(
                    "Arturo", "Aguilera González", Sexo.MASCULINO, 1.75, "ar",
                    dateFormat.parse("1985-12-31"), BrazoDominante.ZURDO, PosicionDeJuego.REVES);
            Jugador jugador3 = new Jugador(
                    "Carlos Daniel", "Gutiérrez Amaya", Sexo.MASCULINO, 1.80, "fr",
                    dateFormat.parse("1985-12-31"), BrazoDominante.DIESTRO, PosicionDeJuego.DERECHA);
            Jugador jugador4 = new Jugador(
                    "Manuel", "Castillo Sancho", Sexo.MASCULINO, 1.85, "br",
                    dateFormat.parse("1985-12-31"), BrazoDominante.DIESTRO, PosicionDeJuego.REVES);
            Jugador jugador5 = new Jugador(
                    "Alejandro", "Galán Romo", Sexo.MASCULINO, 1.90, "es",
                    dateFormat.parse("1985-12-31"), BrazoDominante.DIESTRO, PosicionDeJuego.REVES);
            Jugador jugador6 = new Jugador(
                    "Ignacio", "Ávila Reyes", Sexo.MASCULINO, 1.75, "br",
                    dateFormat.parse("2001-12-31"), BrazoDominante.DIESTRO, PosicionDeJuego.DERECHA);
            
            //PAREJAS
            Pareja pareja1 = new Pareja("Carlos Pozzoni", Sexo.MASCULINO);
            Pareja pareja2 = new Pareja("Jorge Martinez", Sexo.MASCULINO);

            parejaRepository.saveAll(List.of(pareja1, pareja2));

            jugador1.setPareja(pareja1);
            jugador2.setPareja(pareja1);
            jugador3.setPareja(pareja2);
            jugador4.setPareja(pareja2);

            jugadorRepository.saveAll(List.of(jugador1, jugador2, jugador3, jugador4, jugador5, jugador6));


            // TORNEOS
            Torneo torneo = new Torneo("Cervezas Victoria Marbella Master 2022",
                    dateFormat.parse("2022-05-28"),
                    dateFormat.parse("2022-06-05"));

            torneoRepository.save(torneo);

            // PARTIDOS
            Partido partido1 = new Partido(
                    "7-6 6-7 7-5",
                    dateFormat.parse("2022-05-30"),
                    "Juez 1",
                    Fase.FINAL,
                    torneo,
                    List.of(pareja1, pareja2));

            partidoRepository.saveAll(List.of(partido1));
        };
    }
}
