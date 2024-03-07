package ar.edu.utn.frc.tup.lciii.dtos.response;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TemperatureResponse {
    @JsonAlias({"temperature", "value"})
    private BigDecimal value;
    private Character unit;
}
