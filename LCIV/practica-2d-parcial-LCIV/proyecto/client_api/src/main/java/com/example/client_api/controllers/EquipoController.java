package com.example.client_api.controllers;

import com.example.client_api.dtos.responses.Equipo;
import com.example.client_api.dtos.responses.EquipoWithId;
import com.example.client_api.dtos.responses.EquiposPorBarrio;
import com.example.client_api.services.EquipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class EquipoController {

    @Autowired
    private EquipoService equipoService;

    @GetMapping("equipos")
    public List<Equipo> obtenerEquipos() {
        return equipoService.obtenerEquipos();
    }

    @GetMapping("barrios/equipos")
    public List<EquiposPorBarrio> obtenerEquiposPorBarrio() {
        return equipoService.obtenerEquiposPorBarrio();
    }

    @PostMapping("crear/{nombre}")
    public EquipoWithId crearEquipo(@PathVariable String nombre){
        return equipoService.guardarEquipo(nombre);
    }
}
