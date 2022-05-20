package es.padelnow.core.confirmationToken.useCases;

import es.padelnow.core.confirmationToken.ConfirmationToken;
import es.padelnow.core.confirmationToken.ConfirmationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TokenFinder {

    private final ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    public TokenFinder(ConfirmationTokenRepository confirmationTokenRepository) {
        this.confirmationTokenRepository = confirmationTokenRepository;
    }

    public Optional<ConfirmationToken> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }
}
