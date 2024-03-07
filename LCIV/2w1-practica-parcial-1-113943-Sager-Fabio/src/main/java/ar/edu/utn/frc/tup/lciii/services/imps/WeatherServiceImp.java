package ar.edu.utn.frc.tup.lciii.services.imps;

import ar.edu.utn.frc.tup.lciii.clients.dtos.LocationDto;
import ar.edu.utn.frc.tup.lciii.clients.WeatherClient;
import ar.edu.utn.frc.tup.lciii.dtos.request.ClientRequest;
import ar.edu.utn.frc.tup.lciii.dtos.response.*;
import ar.edu.utn.frc.tup.lciii.enteties.AccessLogEntity;
import ar.edu.utn.frc.tup.lciii.enteties.ClientEntity;
import ar.edu.utn.frc.tup.lciii.repositories.AccessLogRepository;
import ar.edu.utn.frc.tup.lciii.repositories.ClientRepository;
import ar.edu.utn.frc.tup.lciii.services.WeatherService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
public class WeatherServiceImp implements WeatherService {

    @Autowired
    private WeatherClient weatherClient;
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    ClientRepository clientRepository;
    @Autowired
    AccessLogRepository accessLogRepository;

    @Override
    public LocationDto[] getLocations(Long clientId, String secret) {
        saveAccessLog(clientId, secret, "Asked for all locations");
        return weatherClient.getLocations().getBody();
    }

    @Override
    public WeatherResponse getLocationWeatherByDateTime(Long locationId, String dateTime,
                                                        Long clientId, String secret) {
        BasicLocationResponse location = modelMapper.map(weatherClient.getLocationById(locationId),
                BasicLocationResponse.class);

        TemperatureResponse temperature =
                Objects.requireNonNull(
                        weatherClient.getTemperatureByLocationAndDate(locationId, dateTime).getBody())[0];

        String wind = Objects.requireNonNull(
                weatherClient.getWindByLocationAndDate(locationId, dateTime).getBody())[0].toString();

        AirQualityResponse airQuality = modelMapper.map(Objects.requireNonNull(
                weatherClient.getAirQuelityByLocationAndDate(locationId, dateTime).getBody())[0],
                AirQualityResponse.class);

        CloudinessResponse cloudiness = modelMapper.map(
                Objects.requireNonNull(
                        weatherClient.getCloudinessByLocationAndDate(locationId, dateTime).getBody())[0],
                CloudinessResponse.class
        );

        saveAccessLog(clientId, secret, "Asked for weather from " +
                locationId + "id location at " + dateTime);

        return new WeatherResponse(location, temperature, wind, airQuality, cloudiness);
    }

    @Override
    public ClientResponse suscribe(ClientRequest clientRequest) {
        UUID uuid = UUID.randomUUID();
        String secret = uuid.toString();

        ClientEntity newClient = ClientEntity.builder()
                .email(clientRequest.getEmail()).
                temperatureUnit(clientRequest.getTemperatureUnit()).secret(secret).build();

        newClient = clientRepository.save(newClient);

        return modelMapper.map(newClient, ClientResponse.class);
    }

    private Long saveAccessLog(Long clientId, String secret, String queryDescription){
        Optional<ClientEntity> clientEntityOptional = clientRepository.findByIdAndSecret(clientId, secret);

        if(clientEntityOptional.isEmpty()) throw new EntityNotFoundException("Client doesn't founded");

        AccessLogEntity accessLogEntity = new AccessLogEntity();
        accessLogEntity.setClient(clientEntityOptional.get());
        accessLogEntity.setCreatedAt(ZonedDateTime.now());
        accessLogEntity.setQuery(queryDescription);

        return accessLogRepository.save(accessLogEntity).getId();
    }
}
