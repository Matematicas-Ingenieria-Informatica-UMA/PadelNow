package es.padelnow.core.user.useCases;

import es.padelnow.core.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserEnabler {

    private final UserRepository repository;

    @Autowired
    public UserEnabler(UserRepository repository) {
        this.repository = repository;
    }

    public void enableAppUser(String email) {
        repository.enableAppUser(email);
    }
}
