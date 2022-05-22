package es.padelnow.core.institucion.useCases.create;

import es.padelnow.core.circuito.Circuito;
import es.padelnow.core.posicion.Posicion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.net.URL;
import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
public class CreateInstitucionRequest {
    private String nombre;
    private URL foto;
    private Collection<Posicion> posiciones;
    private Collection<Circuito> circuitos;
}
