package es.padelnow.core.registration.useCases.registerUser;

import es.padelnow.core.user.User;
import es.padelnow.core.user.enums.UserRole;
import es.padelnow.core.user.useCases.SignUpUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRegistrator {

    private final SignUpUserService signUpUserService;

    @Autowired
    public UserRegistrator(SignUpUserService signUpUserService) {
        this.signUpUserService = signUpUserService;
    }

    public String register(RegistrationRequest request) {
        return signUpUserService.signUpUser(
                new User(
                        request.getUsername(),
                        request.getFullName(),
                        request.getPassword(),
                        UserRole.ADMIN
                )
        );
    }
}
