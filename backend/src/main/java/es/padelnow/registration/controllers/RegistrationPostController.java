package es.padelnow.registration.controllers;

import es.padelnow.registration.useCases.registerUser.RegistrationRequest;
import es.padelnow.registration.useCases.registerUser.UserRegistrator;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "registration")
@AllArgsConstructor
public class RegistrationPostController {

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
}
