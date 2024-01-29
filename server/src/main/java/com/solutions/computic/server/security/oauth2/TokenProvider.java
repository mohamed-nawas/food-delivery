package com.solutions.computic.server.security.oauth2;

import java.security.Key;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TokenProvider {

    private final long tokenExpirationMs;
    private final String tokenSecretKey;

    @Autowired
    public TokenProvider(@Value("${token.expirationms}") long tokenExpirationMs,
            @Value("${token.secret.key}") String tokenSecretKey) {
        this.tokenExpirationMs = tokenExpirationMs;
        this.tokenSecretKey = tokenSecretKey;
    }

    public String createToken(Authentication authentication) {
        // UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        DefaultOidcUser oidcUser = (DefaultOidcUser) authentication.getPrincipal();
        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
        UserPrincipal userPrincipal = new UserPrincipal(oidcUser.getSubject(), oidcUser.getEmail(), "", authorities);
        userPrincipal.setAttributes(oidcUser.getAttributes());

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + tokenExpirationMs);

        return Jwts.builder()
                // .setSubject((userPrincipal.getId()))
                .setSubject(userPrincipal.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(getSigningKey(), SignatureAlgorithm.HS512)
                .compact();
    }

    public String getUserIdFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build().parseClaimsJws(authToken);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(tokenSecretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
