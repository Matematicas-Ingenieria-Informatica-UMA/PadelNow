package es.padelnow.core.registration.useCases.registerUser;

import lombok.*;

@AllArgsConstructor
@Data
public class RegistrationRequest {

    private String username;
    private String fullName;
    private String password;

}
