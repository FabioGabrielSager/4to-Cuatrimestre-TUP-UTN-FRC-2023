package ar.edu.utn.frc.tup.lciii;

import ar.edu.utn.frc.tup.lciii.controllers.LocationController;
import ar.edu.utn.frc.tup.lciii.controllers.WeatherController;
import ar.edu.utn.frc.tup.lciii.services.WeatherService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class SmokeTest {
    @Autowired
    private WeatherController weatherController;

    @Autowired
    private LocationController locationController;

    @Autowired
    private WeatherService weatherService;

    @Test
    public void contextLoads(){
        assertThat(weatherController).isNotNull();
        assertThat(locationController).isNotNull();
        assertThat(weatherService).isNotNull();
    }
}
