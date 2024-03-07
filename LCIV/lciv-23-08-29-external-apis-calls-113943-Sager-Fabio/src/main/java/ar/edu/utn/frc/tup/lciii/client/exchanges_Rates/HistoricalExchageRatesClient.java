package ar.edu.utn.frc.tup.lciii.client.exchanges_Rates;

import ar.edu.utn.frc.tup.lciii.dtos.common.clients.exchange_rates.HistoricalExchangeRateDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

@Service
public class HistoricalExchageRatesClient {
    private RestTemplate restTemplate = new RestTemplate();

    @Value("${app.historical-exchange-rates-url}")
    private String baseResourceURL;

    public BigDecimal getHistoricalExchangeRate(String fromCurrency, String toCurrency, LocalDate date){
        String url = String.format(baseResourceURL + "?from=%s&to=%s&%s", fromCurrency, toCurrency,
                date.toString()
                );

        ResponseEntity<HistoricalExchangeRateDto[]> response = restTemplate.getForEntity(
                url,
                HistoricalExchangeRateDto[].class
        );

        return Objects.requireNonNull(response.getBody())[0].exchange_rate();
    }
}
