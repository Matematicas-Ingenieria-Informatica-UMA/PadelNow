package es.padelnow.core.user.useCases;

import es.padelnow.core.confirmationToken.ConfirmationToken;
import es.padelnow.core.confirmationToken.useCases.TokenCreator;
import es.padelnow.core.user.User;
import es.padelnow.core.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class SignUpUserService {

    private final UserRepository repository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final TokenCreator tokenCreator;

    @Autowired
    public SignUpUserService(UserRepository repository, BCryptPasswordEncoder bCryptPasswordEncoder, TokenCreator tokenCreator) {
        this.repository = repository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.tokenCreator = tokenCreator;
    }

    public String signUpUser(User user) {
        boolean userExists = repository.findByEmail(user.getEmail()).isPresent();
        if (userExists)
            throw new IllegalStateException("Email already taken");

        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);

        repository.save(user);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );

        tokenCreator.saveConfirmationToken(confirmationToken);

        return token;
    }
}
