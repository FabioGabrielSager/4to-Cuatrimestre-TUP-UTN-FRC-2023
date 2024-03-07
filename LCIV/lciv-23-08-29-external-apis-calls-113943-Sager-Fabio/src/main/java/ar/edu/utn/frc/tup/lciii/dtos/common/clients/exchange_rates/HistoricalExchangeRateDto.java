package ar.edu.utn.frc.tup.lciii.dtos.common.clients.exchange_rates;


import java.math.BigDecimal;
import java.time.LocalDate;

public record HistoricalExchangeRateDto(String from, String to, BigDecimal exchange_rate,
                                        LocalDate date) {
}
