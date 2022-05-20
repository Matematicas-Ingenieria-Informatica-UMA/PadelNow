package es.padelnow.core.partido.useCases.create;

import es.padelnow.core.pareja.Pareja;
import es.padelnow.core.torneo.Torneo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
public class CreatePartidoRequest {
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
    private Torneo torneo;
    private Collection<Pareja> parejas;
}
