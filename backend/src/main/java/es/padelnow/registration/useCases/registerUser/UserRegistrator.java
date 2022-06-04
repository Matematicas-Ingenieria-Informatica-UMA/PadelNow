package es.padelnow.registration.useCases.registerUser;

import es.padelnow.user.User;
import es.padelnow.user.enums.UserRole;
import es.padelnow.user.useCases.SignUpUserService;
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
