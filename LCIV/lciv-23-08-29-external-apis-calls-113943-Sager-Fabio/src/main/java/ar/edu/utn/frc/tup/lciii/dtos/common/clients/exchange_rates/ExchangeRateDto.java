package ar.edu.utn.frc.tup.lciii.dtos.common.clients.exchange_rates;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.math.BigDecimal;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ExchangeRateDto(String from, String to, BigDecimal exchange_rate) {
}
