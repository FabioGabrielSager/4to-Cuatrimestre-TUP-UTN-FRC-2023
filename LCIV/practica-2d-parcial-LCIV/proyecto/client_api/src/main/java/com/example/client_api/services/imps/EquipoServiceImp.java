package com.example.client_api.services.imps;

import com.example.client_api.clients.ServerApiClient;
import com.example.client_api.dtos.request.BarrioRequest;
import com.example.client_api.dtos.request.EquipoRequest;
import com.example.client_api.dtos.request.ResultadoRequest;
import com.example.client_api.dtos.responses.Equipo;
import com.example.client_api.dtos.responses.EquipoWithId;
import com.example.client_api.dtos.responses.EquiposPorBarrio;
import com.example.client_api.entities.EquipoEntity;
import com.example.client_api.repositories.EquipoRepository;
import com.example.client_api.services.EquipoService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

@Service
public class EquipoServiceImp implements EquipoService {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ServerApiClient serverApiClient;
    @Autowired
    private EquipoRepository equipoRepository;

    @Override
    public List<Equipo> obtenerEquipos() {
        List<Equipo> response = new ArrayList<>();
        EquipoRequest[] equipos = serverApiClient.obtenerEquipos().getBody();
        List<ResultadoRequest> resultados = new ArrayList<>(List
                .of(Objects.requireNonNull(serverApiClient.obtenerResultados().getBody())));
        int hinchasTotales = 0;

        for (EquipoRequest e: Objects.requireNonNull(equipos)) {
            Equipo equipoResponse = new Equipo();
            equipoResponse.setNombre(e.getNombre());

            for (int i = 0; i < resultados.size(); i++) {
                if(Objects.equals(e.getId(), resultados.get(i).getEquipoId())){
                    equipoResponse.setCantidadHinchas(equipoResponse.getCantidadHinchas()
                            + resultados.get(i).getVotos());
                    hinchasTotales += resultados.get(i).getVotos();
                    resultados.remove(i);
                }
            }
            response.add(equipoResponse);
        }

        for(Equipo e : response){
            e.setPorcentajeHinchas(BigDecimal.valueOf(e.getCantidadHinchas()).multiply(BigDecimal.valueOf(100))
                    .divide(BigDecimal.valueOf(hinchasTotales), RoundingMode.UP));
        }

        return response;
    }

    @Override
    public List<EquiposPorBarrio> obtenerEquiposPorBarrio() {
        List<EquiposPorBarrio> response = new ArrayList<>();
        Map<Long, String> equipos = new HashMap<>();
        BarrioRequest[] barrios = serverApiClient.obtenerBarrios().getBody();
        List<ResultadoRequest> resultados = new ArrayList<>(List
                .of(Objects.requireNonNull(serverApiClient.obtenerResultados().getBody())));

        for (EquipoRequest e : Objects.requireNonNull(serverApiClient.obtenerEquipos().getBody())) {
            equipos.put(e.getId(), e.getNombre());
        }

        for (BarrioRequest b : barrios) {
            EquiposPorBarrio equiposPorBarrio = new EquiposPorBarrio();
            equiposPorBarrio.setNombre(b.getNombre());
            equiposPorBarrio.setEquipos(new ArrayList<>());
            Map<Long, Integer> equipoVotos = new HashMap<>();
            int votosTotales = 0;

            for (int i = 0; i < resultados.size(); i++) {
                if(Objects.equals(b.getId(), resultados.get(i).getBarrioId())){
                    votosTotales += resultados.get(i).getVotos();
                    if(!equipoVotos.containsKey(resultados.get(i).getEquipoId()))
                        equipoVotos.put(resultados.get(i).getEquipoId(), 0);
                    equipoVotos.put(resultados.get(i).getEquipoId(), equipoVotos.get(resultados.get(i).getEquipoId())
                            + resultados.get(i).getVotos());
                    resultados.remove(i);
                    i--;
                }
            }

            for (Long key : equipoVotos.keySet()){
                Equipo equipo = new Equipo();
                equipo.setNombre(equipos.get(key));
                equipo.setCantidadHinchas(equipoVotos.get(key));
                equipo.setPorcentajeHinchas(BigDecimal.valueOf(equipo.getCantidadHinchas()).multiply(BigDecimal.valueOf(100))
                        .divide(BigDecimal.valueOf(votosTotales), RoundingMode.UP));
                equiposPorBarrio.getEquipos().add(equipo);
            }
            
            response.add(equiposPorBarrio);
        }

        return response;
    }

    @Override
    public EquipoWithId guardarEquipo(String nombre) {
        List<Equipo> equipos = obtenerEquipos();
        EquipoEntity equipoAGuardar = null;
        for (Equipo e: equipos) {
            if(Objects.equals(e.getNombre(), nombre)){
                equipoAGuardar = modelMapper.map(e, EquipoEntity.class);
                break;
            }
        }

        if(Objects.isNull(equipoAGuardar))
            throw new EntityNotFoundException("No se encontro el equipo");

        return modelMapper.map(equipoRepository.save(equipoAGuardar), EquipoWithId.class);
    }
}
