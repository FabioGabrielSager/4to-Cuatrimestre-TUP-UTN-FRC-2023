package ar.edu.utn.frc.tup.lciii.dtos.common.clients.cars;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record GetCarDTO(Long id, String model, String brand, Price price) {
}
