package ar.edu.utn.frc.tup.lciii.controllers;

import ar.edu.utn.frc.tup.lciii.dtos.request.ClientRequest;
import ar.edu.utn.frc.tup.lciii.dtos.response.*;
import ar.edu.utn.frc.tup.lciii.services.WeatherService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.math.BigDecimal;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(WeatherController.class)
public class WeatherControllerTest {

    @Autowired
    MockMvc mockMvc;
    @MockBean
    WeatherService weatherService;
    @Autowired
    ObjectMapper objectMapper;

    @Test
    public void subscribeTest() throws Exception {
        ClientRequest clientRequest = new ClientRequest();
        clientRequest.setEmail("email@email.com");
        clientRequest.setTemperatureUnit('C');
        String responseSecret = UUID.randomUUID().toString();

        when(weatherService.suscribe(clientRequest)).thenReturn(new ClientResponse(1L,
                responseSecret));
        MvcResult mvcResult = this.mockMvc.perform(
                post("/weather/subscribe")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(objectMapper.writeValueAsString(clientRequest)))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();

        ClientResponse result = objectMapper.readValue(mvcResult.getResponse().getContentAsString(),
                ClientResponse.class);
        assertEquals(1L, result.getClientId());
        assertEquals(responseSecret, result.getSecret());
    }

    @Test
    public void getWeatherByLocationAndDateTest() throws Exception {
        WeatherResponse weatherResponse = new WeatherResponse(
                new BasicLocationResponse(1L, "FirstLocation"),
                new TemperatureResponse(BigDecimal.valueOf(30), 'C'),
                "10 km/h from east",
                new AirQualityResponse(49, "Good"),
                new CloudinessResponse(0, "Clear sky")
        );

        when(weatherService.getLocationWeatherByDateTime(1L, "2017-01-01T00:01:00.000Z",
                1L, "asd-asd-asd")).thenReturn(weatherResponse);

        MvcResult mvcResult = this.mockMvc.perform(
                get("/weather/{id}", 1L)
                        .param("dateTime", "2017-01-01T00:01:00.000Z")
                        .param("client_id", "1")
                        .param("secret", "asd-asd-asd")
        ).andDo(print()).andExpect(status().isOk()).andReturn();

        WeatherResponse result = objectMapper.readValue(mvcResult.getResponse().getContentAsString(),
                WeatherResponse.class);

        assertEquals(weatherResponse, result);
    }
}
