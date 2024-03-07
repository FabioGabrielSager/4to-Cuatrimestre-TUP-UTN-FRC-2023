package com.example.client_api.dtos.responses;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class EquipoWithId {
    private Long id;
    private String nombre;
    private int cantidadHinchas;
    private BigDecimal porcentajeHinchas;
}