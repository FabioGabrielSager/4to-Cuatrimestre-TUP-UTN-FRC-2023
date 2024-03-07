package ar.edu.utn.frc.tup.lciii.services;

import ar.edu.utn.frc.tup.lciii.clients.dtos.LocationDto;
import ar.edu.utn.frc.tup.lciii.dtos.request.ClientRequest;
import ar.edu.utn.frc.tup.lciii.dtos.response.ClientResponse;
import ar.edu.utn.frc.tup.lciii.dtos.response.WeatherResponse;
import org.springframework.stereotype.Service;

@Service
public interface WeatherService {
    LocationDto[] getLocations(Long clientId, String secret);
    WeatherResponse getLocationWeatherByDateTime(Long locationId, String dateTime, Long clientId, String secret);
    ClientResponse suscribe(ClientRequest clientRequest);
}
