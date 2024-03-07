package ar.edu.utn.frc.tup.lciii.dtos.request;

import jakarta.validation.constraints.Email;
import lombok.Data;
import lombok.NonNull;

@Data
public class ClientRequest {
    private String email;
    private char temperatureUnit;
}
