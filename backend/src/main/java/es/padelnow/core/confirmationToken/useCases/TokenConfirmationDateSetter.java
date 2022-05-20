package es.padelnow.core.confirmationToken.useCases;

import es.padelnow.core.confirmationToken.ConfirmationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TokenConfirmationDateSetter {

    private final ConfirmationTokenRepository repository;

    @Autowired
    public TokenConfirmationDateSetter(ConfirmationTokenRepository repository) {
        this.repository = repository;
    }

    public int setConfirmedAt(String token) {
        return repository.setConfirmedAt(
                token,
                LocalDateTime.now()
        );
    }
}
