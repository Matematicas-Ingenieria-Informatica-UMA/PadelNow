package es.padelnow.core.circuito.useCases.create;


import es.padelnow.core.circuito.Genero;
import es.padelnow.core.institucion.Institucion;
import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Date;

@Data
@AllArgsConstructor
public class CreateCircuitoRequest {
    private String nombre;
    private Date ano;
    private Genero genero;
    private Institucion institucion;
}
