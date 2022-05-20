package es.padelnow.backend.controller.registration;

import es.padelnow.core.registration.useCases.registerUser.RegistrationRequest;
import es.padelnow.core.registration.useCases.registerUser.UserRegistrator;
import es.padelnow.core.registration.useCases.tokenConfirmation.TokenConfirmator;
import lombok.AllArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "registration")
@AllArgsConstructor
public class RegistrationPostController {

    private final TokenConfirmator tokenConfirmator;

    private final UserRegistrator userRegistrator;

    @PostMapping
    public ResponseEntity<String> register(@RequestBody RegistrationRequest request) {
        try {
            String responseMessage = userRegistrator.register(request);
            return ResponseEntity.accepted().body(responseMessage);
        } catch (IllegalStateException err) {
            return ResponseEntity.badRequest().body(err.getMessage());
        }
    }

    @PostMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return tokenConfirmator.confirmToken(token);
    }
}
