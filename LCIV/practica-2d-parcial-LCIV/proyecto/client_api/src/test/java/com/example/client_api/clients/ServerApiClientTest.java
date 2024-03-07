package com.example.client_api.clients;

import com.example.client_api.configs.RestClientConfig;
import com.example.client_api.dtos.request.EquipoRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.client.MockRestServiceServer;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withStatus;

@RestClientTest(ServerApiClient.class)
@Import(RestClientConfig.class)
public class ServerApiClientTest {
    @Autowired
    private ServerApiClient serverApiClient;
    @Autowired
    private MockRestServiceServer mockServer;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void obtenerEquiposTest(){
        mockServer.expect(requestTo("http://serverapi:8081/equipos"))
                .andRespond(withStatus(HttpStatus.OK)
                        .contentType(MediaType.APPLICATION_JSON));

        ResponseEntity<EquipoRequest[]> response = serverApiClient.obtenerEquipos();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        mockServer.verify();
    }
}
