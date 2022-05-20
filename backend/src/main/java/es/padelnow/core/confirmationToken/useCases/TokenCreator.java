package es.padelnow.core.confirmationToken.useCases;

import es.padelnow.core.confirmationToken.ConfirmationToken;
import es.padelnow.core.confirmationToken.ConfirmationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokenCreator {

    private final ConfirmationTokenRepository repository;

    @Autowired
    public TokenCreator(ConfirmationTokenRepository repository) {
        this.repository = repository;
    }

    public void saveConfirmationToken(ConfirmationToken token) {
        repository.save(token);
    }
}
