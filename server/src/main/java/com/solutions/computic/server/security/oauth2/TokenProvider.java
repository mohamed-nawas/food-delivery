package com.solutions.computic.server.security.oauth2;

import java.security.Key;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.stereotype.Service;

import com.solutions.computic.server.security.oauth2.facebook.FacebookOAuth2User;
import com.solutions.computic.server.security.oauth2.github.GithubOAuth2User;
import com.solutions.computic.server.security.oauth2.google.GoogleOAuth2User;

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
        CustomOAuth2User customOAuth2User = null;
        if (authentication.getPrincipal() instanceof DefaultOidcUser) {
            DefaultOidcUser oidcUser = (DefaultOidcUser) authentication.getPrincipal();
            customOAuth2User = new GoogleOAuth2User(oidcUser);
        }
        if (authentication.getPrincipal() instanceof DefaultOAuth2User) {
            DefaultOAuth2User oAuth2User = (DefaultOAuth2User) authentication.getPrincipal();
            Map<String, Object> attributes = oAuth2User.getAttributes();
            if (attributes.containsKey("login")) {
                customOAuth2User = new GithubOAuth2User(oAuth2User);
            } else {
                customOAuth2User = new FacebookOAuth2User(oAuth2User);
            }
        }
        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
        
        if (customOAuth2User == null) {
            throw new IllegalStateException("customOAuth2User cannot be null");
        }

        UserPrincipal userPrincipal = new UserPrincipal(customOAuth2User.getId(), customOAuth2User.getEmail(), "", authorities);
        userPrincipal.setAttributes(customOAuth2User.getAttributes());

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + tokenExpirationMs);

        return Jwts.builder()
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