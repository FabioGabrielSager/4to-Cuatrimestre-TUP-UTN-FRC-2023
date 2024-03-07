package ar.edu.utn.frc.tup.lciii.services;


import ar.edu.utn.frc.tup.lciii.clients.WeatherClient;
import ar.edu.utn.frc.tup.lciii.clients.dtos.LocationDto;
import ar.edu.utn.frc.tup.lciii.enteties.AccessLogEntity;
import ar.edu.utn.frc.tup.lciii.enteties.ClientEntity;
import ar.edu.utn.frc.tup.lciii.repositories.AccessLogRepository;
import ar.edu.utn.frc.tup.lciii.repositories.ClientRepository;
import ar.edu.utn.frc.tup.lciii.services.imps.WeatherServiceImp;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.support.ReflectionSupport;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;

import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class WeatherServiceTest {
    @Mock
    WeatherClient weatherClient;
    @Mock
    ClientRepository clientRepository;
    @Mock
    AccessLogRepository accessLogRepository;
    @InjectMocks
    WeatherServiceImp weatherServiceImp;

    final Long CLIENT_ID = 1L;
    final String CLIENT_SECRET = "asd-asd-asd";
    ClientEntity clientEntity = ClientEntity.builder()
            .id(1L)
            .secret("asd-asd-asd")
            .email("email@email")
            .temperatureUnit('C')
            .build();
    AccessLogEntity accessLogEntity = AccessLogEntity.builder()
            .id(1L)
            .client(clientEntity)
            .query("")
            .createdAt(ZonedDateTime.now())
            .build();

    @Test
    public void getLocationsTest(){
        Long clientId = 1L;
        String clientSecret = "asd-asd-asd";
        ResponseEntity<LocationDto[]> locations = new ResponseEntity<>(new LocationDto[]{
                new LocationDto(1L, "First Location",
                        BigDecimal.valueOf(30.4040), BigDecimal.valueOf(40.3030)),
                new LocationDto(1L, "Second Location",
                        BigDecimal.valueOf(30.4040), BigDecimal.valueOf(40.3030))
        }, HttpStatusCode.valueOf(200));

        when(weatherClient.getLocations()).thenReturn(locations);
        when(clientRepository.findByIdAndSecret(clientId, clientSecret)).thenReturn(Optional.of(clientEntity));
        when(accessLogRepository.save(any(AccessLogEntity.class))).thenReturn(accessLogEntity);

        LocationDto[] result = weatherServiceImp.getLocations(1L, "asd-asd-asd");

        assertEquals(2, result.length);
    }

    @Test
    public void saveAccessLogTest(){

        when(clientRepository.findByIdAndSecret(CLIENT_ID, CLIENT_SECRET)).thenReturn(Optional.of(clientEntity));
        when(accessLogRepository.save(any(AccessLogEntity.class))).thenReturn(accessLogEntity);

        Optional<Method> methodOptional = ReflectionSupport.findMethod(WeatherServiceImp.class,
                "saveAccessLog", Long.class, String.class, String.class);

        Long result = 0L;
        if(methodOptional.isPresent()) {
            result = (Long) ReflectionSupport.invokeMethod(methodOptional.get(), weatherServiceImp,
                    1L, "asd-asd-asd", "some desc");
        }
        assertEquals(1L, result);
    }
}
