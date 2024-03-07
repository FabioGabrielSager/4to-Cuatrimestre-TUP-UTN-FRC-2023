package com.example.client_api.dtos.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResultadoRequest {
    private Long id;
    private Long barrioId;
    private Long equipoId;
    private Long encuestadorId;
    private int votos;
}
