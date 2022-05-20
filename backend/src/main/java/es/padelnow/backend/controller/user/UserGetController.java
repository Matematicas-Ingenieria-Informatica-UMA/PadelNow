package es.padelnow.backend.controller.user;

import es.padelnow.core.user.User;
import es.padelnow.core.user.useCases.UserDetailsFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserGetController {

    private final UserDetailsFinder userFinder;

    @Autowired
    public UserGetController(UserDetailsFinder userFinder) {
        this.userFinder = userFinder;
    }

    @GetMapping("user")
    public List<User> findAll() {
        return userFinder.findAll();
    }
}
