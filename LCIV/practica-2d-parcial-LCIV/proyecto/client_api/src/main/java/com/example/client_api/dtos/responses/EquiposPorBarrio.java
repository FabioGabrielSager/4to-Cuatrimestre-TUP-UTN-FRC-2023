package com.example.client_api.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EquiposPorBarrio {
    private String nombre;
    private List<Equipo> equipos;
}
