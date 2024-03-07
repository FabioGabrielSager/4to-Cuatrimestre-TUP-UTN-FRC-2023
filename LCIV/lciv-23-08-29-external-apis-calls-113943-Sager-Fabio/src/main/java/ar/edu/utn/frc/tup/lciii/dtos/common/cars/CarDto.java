package ar.edu.utn.frc.tup.lciii.dtos.common.cars;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
public class CarDto {
    private String Model;
    private String brand;
    private BigDecimal localPrice;
}
