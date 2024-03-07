package com.example.client_api.clients;

import com.example.client_api.dtos.request.BarrioRequest;
import com.example.client_api.dtos.request.EquipoRequest;
import com.example.client_api.dtos.request.ResultadoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ServerApiClient {
    @Autowired
    private RestTemplate restTemplate;

    private String urlBase = "http://serverapi:8081";
//    private String urlBase = "http://localhost:8081";

    public ResponseEntity<EquipoRequest[]> obtenerEquipos(){
        return restTemplate.getForEntity(urlBase + "/equipos", EquipoRequest[].class);
    }

    public ResponseEntity<ResultadoRequest[]> obtenerResultados(){
        return restTemplate.getForEntity(urlBase + "/resultados",
                ResultadoRequest[].class);
    }

    public ResponseEntity<BarrioRequest[]> obtenerBarrios(){
        return restTemplate.getForEntity(urlBase + "/barrios", BarrioRequest[].class);
    }

}
