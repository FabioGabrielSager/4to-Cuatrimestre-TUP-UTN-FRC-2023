package ar.edu.utn.frc.tup.lciii.clients;

import ar.edu.utn.frc.tup.lciii.clients.dtos.LocationDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class WeatherClientTest {
    @MockBean
    RestTemplate restTemplate;
    @Autowired
    WeatherClient client;

    @Test
    public void getLocationByIdTest(){
        LocationDto location = new LocationDto(1L, "Second Location",
                BigDecimal.valueOf(30.4040), BigDecimal.valueOf(40.3030));

        when(restTemplate.getForEntity(
                "https://my-json-server.typicode.com/LCIV-2023/fake-weather/location?location_id=1",
                LocationDto[].class)).thenReturn(new ResponseEntity<>(new LocationDto[]{location},
                HttpStatusCode.valueOf(200)));
        LocationDto result = client.getLocationById(1L);

        assertEquals(location.getId(), result.getId());
    }
}
