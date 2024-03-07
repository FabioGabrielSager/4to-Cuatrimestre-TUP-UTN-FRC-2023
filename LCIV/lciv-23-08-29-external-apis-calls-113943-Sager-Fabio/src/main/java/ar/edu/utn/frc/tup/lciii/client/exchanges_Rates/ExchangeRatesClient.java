package ar.edu.utn.frc.tup.lciii.client.exchanges_Rates;

import ar.edu.utn.frc.tup.lciii.dtos.common.clients.exchange_rates.ExchangeRateDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Objects;

@Service
public class ExchangeRatesClient {
    RestTemplate restTemplate = new RestTemplate();

    @Value("${app.exchange-rates-url}")
    private String baseResourceURL;

    public BigDecimal getExchangeRate(String fromCurrency, String toCurrency){
        String url = String.format(baseResourceURL + "?from=%s&to=%s", fromCurrency, toCurrency);

        ResponseEntity<ExchangeRateDto[]> response = restTemplate.getForEntity(
                url,
                ExchangeRateDto[].class
        );

        return Objects.requireNonNull(response.getBody())[0].exchange_rate();
    }
}
