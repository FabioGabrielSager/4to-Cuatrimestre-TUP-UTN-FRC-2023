package com.example.client_api.services;

import com.example.client_api.dtos.responses.Equipo;
import com.example.client_api.dtos.responses.EquipoWithId;
import com.example.client_api.dtos.responses.EquiposPorBarrio;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EquipoService {
    List<Equipo> obtenerEquipos();
    List<EquiposPorBarrio> obtenerEquiposPorBarrio();
    EquipoWithId guardarEquipo(String nombre);
}
