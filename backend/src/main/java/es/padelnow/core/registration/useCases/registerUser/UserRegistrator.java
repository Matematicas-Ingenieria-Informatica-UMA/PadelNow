package es.padelnow.core.registration.useCases.registerUser;

import es.padelnow.core.email.EmailValidator;
import es.padelnow.core.user.User;
import es.padelnow.core.user.enums.UserRole;
import es.padelnow.core.user.useCases.SignUpUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRegistrator {

    private final EmailValidator emailValidator;

    private final SignUpUserService signUpUserService;

    @Autowired
    public UserRegistrator(EmailValidator emailValidator, SignUpUserService signUpUserService) {
        this.emailValidator = emailValidator;
        this.signUpUserService = signUpUserService;
    }

    public String register(RegistrationRequest request) {
        boolean isValid = emailValidator.test(request.getEmail());
        if (!isValid)
            throw new IllegalStateException("Email is not valid");
        return signUpUserService.signUpUser(
                new User(
                        request.getNombre(),
                        request.getApellidos(),
                        request.getEmail(),
                        request.getPassword(),
                        UserRole.ADMIN
                )
        );
    }
}
