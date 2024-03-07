package ar.edu.utn.frc.tup.lciii.dtos.response;

public record WeatherResponse(BasicLocationResponse location,
                              TemperatureResponse temperature,
                              String Wind,
                              AirQualityResponse airQuality,
                              CloudinessResponse cloudiness
                               ) {
}
