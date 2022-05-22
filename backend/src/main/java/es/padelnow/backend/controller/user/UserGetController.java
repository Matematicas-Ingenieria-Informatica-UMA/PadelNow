package es.padelnow.backend.controller.user;

import es.padelnow.core.user.User;
import es.padelnow.core.user.useCases.UserFinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserGetController {

    private final UserFinder finder;

    @Autowired
    public UserGetController(UserFinder finder) {
        this.finder = finder;
    }

    @GetMapping("user")
    public List<User> findAll() {
        return finder.findAll();
    }
}
