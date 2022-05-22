package es.padelnow.core.user.useCases;

import es.padelnow.core.user.User;
import es.padelnow.core.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpUserService {

    private final UserRepository repository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    @Autowired
    public SignUpUserService(UserRepository repository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.repository = repository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public String signUpUser(User user) {
        boolean userExists = repository.findByUsername(user.getUsername()).isPresent();
        if (userExists)
            throw new IllegalStateException("Username already taken");

        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);

        repository.save(user);

        return "CREATED";
    }
}
