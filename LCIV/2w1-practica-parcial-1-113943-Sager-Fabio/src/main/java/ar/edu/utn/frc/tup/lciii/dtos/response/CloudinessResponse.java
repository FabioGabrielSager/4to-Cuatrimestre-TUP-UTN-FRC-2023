package ar.edu.utn.frc.tup.lciii.dtos.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;

@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public record CloudinessResponse(Integer index, String description) {
}
