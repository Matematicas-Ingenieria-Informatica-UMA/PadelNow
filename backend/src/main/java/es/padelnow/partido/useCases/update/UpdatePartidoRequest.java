package es.padelnow.partido.useCases.update;

import es.padelnow.torneo.Torneo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdatePartidoRequest {

    private String resultado;

    private Date fecha;

    private String juez_silla;

    private String bolas_breaks;

    private String winners;

    private String smashes;

    private String errores_no_forzados;

    private String bolas_oro;

    private String duracion;

    private String fase;

    private Long torneo;
}
