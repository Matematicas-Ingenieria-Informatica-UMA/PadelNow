package es.padelnow.core.registration.useCases.tokenConfirmation;

import es.padelnow.core.confirmationToken.ConfirmationToken;
import es.padelnow.core.confirmationToken.useCases.TokenConfirmationDateSetter;
import es.padelnow.core.confirmationToken.useCases.TokenFinder;
import es.padelnow.core.user.useCases.UserEnabler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class TokenConfirmator {

    private final TokenFinder tokenFinder;

    private final UserEnabler userEnabler;

    private final TokenConfirmationDateSetter tokenConfirmationDateSetter;

    @Autowired
    public TokenConfirmator(TokenFinder tokenFinder, UserEnabler userEnabler, TokenConfirmationDateSetter tokenConfirmationDateSetter) {
        this.tokenFinder = tokenFinder;
        this.userEnabler = userEnabler;
        this.tokenConfirmationDateSetter = tokenConfirmationDateSetter;
    }

    @Transactional
    public String confirmToken(String token) {
        ConfirmationToken confirmationToken = tokenFinder
                .getToken(token)
                .orElseThrow(() -> new IllegalStateException("Token not found"));

        if (confirmationToken.getConfirmedAt() != null)
            throw new IllegalStateException("Email already confirmed");

        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {


            throw new IllegalStateException("token expired");
        }

        userEnabler.enableAppUser(confirmationToken.getUser().getEmail());

        tokenConfirmationDateSetter.setConfirmedAt(token);

        return "confirmed";
    }
}
