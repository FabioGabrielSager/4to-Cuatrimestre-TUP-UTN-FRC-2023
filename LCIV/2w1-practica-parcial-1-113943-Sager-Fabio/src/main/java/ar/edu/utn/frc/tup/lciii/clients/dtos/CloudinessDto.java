package ar.edu.utn.frc.tup.lciii.clients.dtos;

import com.fasterxml.jackson.annotation.JsonAlias;

public record CloudinessDto(Long id, @JsonAlias({"location_id", "locationId"}) Long locationId, int cloudiness,
                            @JsonAlias({"created_at", "createdAt"}) String createdAt) {
}
