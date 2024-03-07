package com.car_api.clients;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Objects;

@Slf4j
@Service
public class ExchangeRateClient {

    @Autowired
    private RestTemplate restTemplate;

    private Integer counter = 0;

    private static final String RESILIENCE4J_INSTANCE_NAME = "microCircuitBreakerExchangeRate";
    private static final String FALLBACK_METHOD = "fallback";
    String baseResourceUrl = "http://exrateapi:8081/exchange_rate/";

    @CircuitBreaker(name = RESILIENCE4J_INSTANCE_NAME, fallbackMethod = FALLBACK_METHOD)
    public ResponseEntity<BigDecimal> getExchangeRate(String from, String to){
        ResponseEntity<BigDecimal> response = restTemplate.getForEntity(
                String.format(baseResourceUrl + "?from=%s&to=%s", from, to),
                BigDecimal.class
        );

        return response;
    }

    public ResponseEntity<BigDecimal> fallback(Throwable throwable) {
        log.info("Execution N° " + counter + " - FallBack Exchange Rate" + "- Exception Message: " +
                throwable.getMessage());
        return ResponseEntity.status(503).body(BigDecimal.ZERO);
    }
}
