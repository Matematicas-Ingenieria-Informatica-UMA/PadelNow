package es.padelnow.core.user.useCases;

import es.padelnow.core.user.User;
import es.padelnow.core.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserDetailsFinder implements org.springframework.security.core.userdetails.UserDetailsService {

    private final static String USER_NOT_FOUND_MSG =
            "User with email %s does not exists";
    private final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email)
                .orElseThrow(() -> new IllegalStateException(String.format(USER_NOT_FOUND_MSG, email)));
    }

    public List<User> findAll() {
        return repository.findAll();
    }
}
