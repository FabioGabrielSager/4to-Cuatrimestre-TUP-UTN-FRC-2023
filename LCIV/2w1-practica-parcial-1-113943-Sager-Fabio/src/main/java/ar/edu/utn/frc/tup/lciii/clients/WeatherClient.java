package ar.edu.utn.frc.tup.lciii.clients;

import ar.edu.utn.frc.tup.lciii.clients.dtos.AirQualityDto;
import ar.edu.utn.frc.tup.lciii.clients.dtos.CloudinessDto;
import ar.edu.utn.frc.tup.lciii.clients.dtos.LocationDto;
import ar.edu.utn.frc.tup.lciii.clients.dtos.WindDto;
import ar.edu.utn.frc.tup.lciii.dtos.response.TemperatureResponse;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Service
@Slf4j
public class WeatherClient {
    @Autowired
    private RestTemplate restTemplate;
    private static final String RESILIENCE4J_INSTANCE_NAME = "WeatherAPICircuit";
    private static final String FALLBACK_METHOD = "fallback";

    private String baseResourceUrl = "https://my-json-server.typicode.com/LCIV-2023/fake-weather/";

    public ResponseEntity<LocationDto[]> getLocations(){
        return restTemplate.getForEntity(baseResourceUrl + "location", LocationDto[].class);
    }

    public LocationDto getLocationById(Long id){
        LocationDto response = Objects.requireNonNull(restTemplate.
                getForEntity(baseResourceUrl + "location?location_id=" + id, LocationDto[].class).getBody())[0];
        return response;
    }

    public ResponseEntity<TemperatureResponse[]> getTemperatureByLocationAndDate(Long locationId,
                                                                               String dateTime){
        return restTemplate.getForEntity(
                String.format(baseResourceUrl + "temperature?location_id=%s&created_at=%s", locationId, dateTime),
                TemperatureResponse[].class
        );
    }

    public ResponseEntity<WindDto[]> getWindByLocationAndDate(Long locationId,
                                                              String dateTime){
        return restTemplate.getForEntity(
                String.format(baseResourceUrl + "wind?location_id=%s&created_at=%s", locationId, dateTime),
                WindDto[].class
        );
    }

    @CircuitBreaker(name = RESILIENCE4J_INSTANCE_NAME, fallbackMethod = FALLBACK_METHOD)
    public ResponseEntity<AirQualityDto[]> getAirQuelityByLocationAndDate(Long locationId,
                                                                          String dateTime){
        return restTemplate.getForEntity(
                String.format(baseResourceUrl + "air_quality?location_id=%s&created_at=%s", locationId, dateTime),
                AirQualityDto[].class
        );
    }

    @CircuitBreaker(name = RESILIENCE4J_INSTANCE_NAME, fallbackMethod = FALLBACK_METHOD)
    public ResponseEntity<CloudinessDto[]> getCloudinessByLocationAndDate(Long locationId,
                                                                          String dateTime){
        return restTemplate.getForEntity(
                String.format(baseResourceUrl + "cloudiness?location_id=%s&created_at=%s", locationId, dateTime),
                CloudinessDto[].class
        );
    }

    public ResponseEntity<Object> fallback(Throwable throwable){
        log.info("Execution - FallBack Weather API - Exception Message: " +
                throwable.getMessage());
        return ResponseEntity.status(503).body("Response from Circuit Breaker Fallback of Weather API");
    }
}
