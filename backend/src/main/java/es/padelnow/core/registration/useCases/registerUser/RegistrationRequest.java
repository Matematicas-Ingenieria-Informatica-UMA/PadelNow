package es.padelnow.core.registration.useCases.registerUser;

import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class RegistrationRequest {

    private String nombre;
    private String apellidos;
    private String email;
    private String password;

}
