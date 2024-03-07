package ar.edu.utn.frc.tup.lciii.clients.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@JsonIgnoreProperties(ignoreUnknown = true)
public record AirQualityDto(Long id, Long locationId, Integer quality, String createdAt) {
}
