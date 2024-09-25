package de.pi314.recipebox;

import java.time.Duration;
import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	@Order(0)
	SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
		http
			.securityMatcher("/**")
            // configure CORS
			.cors((cors) -> cors
				.configurationSource(apiConfigurationSource())
			)
            // disable CSRF protection (would cause 403 otherwise)
            .csrf((csrf) -> csrf
                .disable()
            )
            // for now just disable authorization for all requests
			.authorizeHttpRequests((authorize) -> authorize
                .anyRequest().permitAll()
            )
            ;
		return http.build();
	}


	CorsConfigurationSource apiConfigurationSource() {
		CorsConfiguration conf = new CorsConfiguration();
        String corsString = System.getenv("RECIPEBOX_CORS");
        if (corsString != null && !corsString.isEmpty()) {
            conf.setAllowedOrigins(Arrays.asList(corsString.split(",")));
            log.info("Allowed CORS origins set to: '" + corsString + "' as provided in RECIPEBOX_CORS environment variable.");
        } else {
            conf.setAllowedOrigins(Arrays.asList("*"));
            log.warn("CAUTION: Environment variable RECIPEBOX_CORS not set, allowing all origins '*'. Consider setting this, i.e. like 'http://localhost:4200'.");
        }
        conf.setAllowedMethods(Arrays.asList("GET", "POST", "DELETE"));
        conf.setAllowedHeaders(Arrays.asList(
            "Content-Type"
          , "Access-Control-Allow-Origin" // <- This is needed for the CORS preflight request to be served successfully!
          , "Access-Control-Allow-Headers"
        ));
        conf.setMaxAge(Duration.ofSeconds(5)); // preflight request is valid for 10 seconds
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", conf);
		return source;
	}


}
