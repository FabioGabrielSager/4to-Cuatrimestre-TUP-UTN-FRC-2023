package ar.edu.utn.frc.tup.lciii.controllers;


import ar.edu.utn.frc.tup.lciii.clients.dtos.LocationDto;
import ar.edu.utn.frc.tup.lciii.services.WeatherService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(LocationController.class)
public class LocationControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    WeatherService weatherService;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    public void getLocationsTest() throws Exception {
        LocationDto[] locations = {
                new LocationDto(1L, "First Location",
                        BigDecimal.valueOf(30.4040), BigDecimal.valueOf(40.3030)),
                new LocationDto(1L, "Second Location",
                        BigDecimal.valueOf(30.4040), BigDecimal.valueOf(40.3030))
        };

        when(weatherService.getLocations(1L, "asdfasdf-asdfasdf-asdfasdf")).thenReturn(locations);

        MvcResult mvcResult =
                this.mockMvc.perform(
                        get("/location/{id}", 1L).param("secret",
                                "asdfasdf-asdfasdf-asdfasdf"))
                        .andDo(print())
                        .andExpect(status().isOk()).andReturn();
        LocationDto[] result = objectMapper.readValue(mvcResult.getResponse().getContentAsString(),
                LocationDto[].class);

        assertEquals(2, result.length);
    }

}
