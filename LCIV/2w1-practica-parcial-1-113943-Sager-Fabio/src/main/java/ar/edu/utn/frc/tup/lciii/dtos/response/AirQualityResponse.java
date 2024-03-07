package ar.edu.utn.frc.tup.lciii.dtos.response;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;

@JsonIgnoreProperties(ignoreUnknown = true)
@Builder
public record AirQualityResponse(@JsonAlias({"quality", "index"}) Integer index, String description) {
}
