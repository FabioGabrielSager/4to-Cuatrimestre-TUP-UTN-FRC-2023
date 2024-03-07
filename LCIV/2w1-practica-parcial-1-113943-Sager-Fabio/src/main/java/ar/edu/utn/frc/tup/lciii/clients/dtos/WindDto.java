package ar.edu.utn.frc.tup.lciii.clients.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@NoArgsConstructor
public class WindDto {
    private BigDecimal speed;
    private int direction;

    @Override
    public String toString() {
        String windStr = speed.toString() + "Km/h from ";

        switch (direction){
            case 0, 360:
                windStr = windStr + "North";
                break;
            case 90:
                windStr = windStr + "East";
                break;
            case 180:
                windStr = windStr + "South";
                break;
            case 270:
                windStr = windStr + "West";
                break;
        }

        return windStr;
    }
}
