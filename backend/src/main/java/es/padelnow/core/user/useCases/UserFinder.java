package es.padelnow.core.user.useCases;

import es.padelnow.core.user.User;
import es.padelnow.core.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserFinder {

    private final UserRepository repository;

    @Autowired
    public UserFinder(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> findAll() {
        return repository.findAll();
    }
}
