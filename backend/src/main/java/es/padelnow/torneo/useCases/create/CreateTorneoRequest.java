package es.padelnow.torneo.useCases.create;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class CreateTorneoRequest {
    private String nombre;
    private Date fechaInicial;
    private Date fechaFinal;
}
