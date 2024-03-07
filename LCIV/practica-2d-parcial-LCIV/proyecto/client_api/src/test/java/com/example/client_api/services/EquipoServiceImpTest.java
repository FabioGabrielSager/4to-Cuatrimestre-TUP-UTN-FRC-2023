package com.example.client_api.services;

import com.example.client_api.clients.ServerApiClient;
import com.example.client_api.dtos.request.BarrioRequest;
import com.example.client_api.dtos.request.EquipoRequest;
import com.example.client_api.dtos.request.ResultadoRequest;
import com.example.client_api.dtos.responses.Equipo;
import com.example.client_api.dtos.responses.EquipoWithId;
import com.example.client_api.dtos.responses.EquiposPorBarrio;
import com.example.client_api.entities.EquipoEntity;
import com.example.client_api.repositories.EquipoRepository;
import com.example.client_api.services.imps.EquipoServiceImp;
import jakarta.persistence.EntityNotFoundException;
import org.assertj.core.data.Percentage;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@SpringBootTest
public class EquipoServiceImpTest {
    @Mock
    private ModelMapper modelMapper;
    @Mock
    private EquipoRepository equipoRepository;
    @Mock
    private ServerApiClient serverApiClient;
    @InjectMocks
    private EquipoServiceImp equipoService;

    @Test
    public void obtenerEquiposTest() {
        EquipoRequest[] equipos = { new EquipoRequest(1L, "Talleres"),
                new EquipoRequest(2L, "Instituto") };
        ResultadoRequest[] resultadoRequests = {
                new ResultadoRequest(1L, 1L, 1L, 1L, 100),
                new ResultadoRequest(1L, 1L, 2L, 1L, 102)
        };

        when(serverApiClient.obtenerEquipos()).thenReturn(ResponseEntity.ok(equipos));
        when(serverApiClient.obtenerResultados()).thenReturn(ResponseEntity.ok(resultadoRequests));

        List<Equipo> response = equipoService.obtenerEquipos();

        assertThat(response.size()).isEqualTo(2);
        assertThat(response.get(0).getCantidadHinchas()).isEqualTo(100);
        assertThat(response.get(1).getCantidadHinchas()).isEqualTo(102);
        assertThat(response.get(1).getPorcentajeHinchas()).isCloseTo(BigDecimal.valueOf(51),
                Percentage.withPercentage(1));
    }

    @Test
    public void obtenerEquiposPorBarrioTest(){
        BarrioRequest[] barrioRequests = { new BarrioRequest(1L, "General Paz"),
                new BarrioRequest(2L, "Alta Cordoba")
        };
        EquipoRequest[] equipos = { new EquipoRequest(1L, "Talleres"),
                new EquipoRequest(2L, "Instituto") };
        ResultadoRequest[] resultadoRequests = {
                new ResultadoRequest(1L, 1L, 1L, 1L, 100),
                new ResultadoRequest(2L, 2L, 2L, 1L, 102),
                new ResultadoRequest(3L, 2L, 1L, 1L, 102)
        };

        when(serverApiClient.obtenerEquipos()).thenReturn(ResponseEntity.ok(equipos));
        when(serverApiClient.obtenerResultados()).thenReturn(ResponseEntity.ok(resultadoRequests));
        when(serverApiClient.obtenerBarrios()).thenReturn(ResponseEntity.ok(barrioRequests));

        List<EquiposPorBarrio> response = equipoService.obtenerEquiposPorBarrio();

        assertThat(response.size()).isEqualTo(2);
        assertThat(response.get(0).getNombre()).isEqualTo("General Paz");
        assertThat(response.get(1).getEquipos().get(0).getPorcentajeHinchas())
                .isCloseTo(BigDecimal.valueOf(50), Percentage.withPercentage(0));
    }

    @Test
    public void guardarEquipo(){
        EquipoRequest[] equipos = { new EquipoRequest(1L, "Talleres"),
                new EquipoRequest(2L, "Instituto") };
        ResultadoRequest[] resultadoRequests = {
                new ResultadoRequest(1L, 1L, 1L, 1L, 100),
                new ResultadoRequest(1L, 1L, 2L, 1L, 102)
        };
        EquipoWithId equipo = new EquipoWithId();
        equipo.setNombre("Talleres");
        equipo.setCantidadHinchas(100);
        EquipoEntity equipoEntity = new EquipoEntity();
        equipoEntity.setId(1L);
        equipoEntity.setNombre("Talleres");

        when(serverApiClient.obtenerEquipos()).thenReturn(ResponseEntity.ok(equipos));
        when(serverApiClient.obtenerResultados()).thenReturn(ResponseEntity.ok(resultadoRequests));
        when(modelMapper.map(any(), eq(EquipoEntity.class))).thenReturn(equipoEntity);
        when(modelMapper.map(any(), eq(EquipoWithId.class))).thenReturn(equipo);


        EquipoWithId response = equipoService.guardarEquipo("Talleres");

        assertThat(response.getNombre()).isEqualTo("Talleres");
    }

    @Test
    public void guardarEquipo1(){
        EquipoRequest[] equipos = { new EquipoRequest(1L, "Talleres"),
                new EquipoRequest(2L, "Instituto") };
        ResultadoRequest[] resultadoRequests = {
                new ResultadoRequest(1L, 1L, 1L, 1L, 100),
                new ResultadoRequest(1L, 1L, 2L, 1L, 102)
        };
        EquipoWithId equipo = new EquipoWithId();
        equipo.setNombre("Talleres");
        equipo.setCantidadHinchas(100);

        when(serverApiClient.obtenerEquipos()).thenReturn(ResponseEntity.ok(equipos));
        when(serverApiClient.obtenerResultados()).thenReturn(ResponseEntity.ok(resultadoRequests));
        when(modelMapper.map(any(), eq(EquipoWithId.class))).thenReturn(equipo);


        assertThrows(EntityNotFoundException.class, () -> {
            equipoService.guardarEquipo("Boca Juniors");
        });
    }
}
