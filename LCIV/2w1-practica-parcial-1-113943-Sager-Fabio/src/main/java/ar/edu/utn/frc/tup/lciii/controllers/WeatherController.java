package ar.edu.utn.frc.tup.lciii.controllers;

import ar.edu.utn.frc.tup.lciii.clients.WeatherClient;
import ar.edu.utn.frc.tup.lciii.dtos.request.ClientRequest;
import ar.edu.utn.frc.tup.lciii.dtos.response.ClientResponse;
import ar.edu.utn.frc.tup.lciii.dtos.response.TemperatureResponse;
import ar.edu.utn.frc.tup.lciii.dtos.response.WeatherResponse;
import ar.edu.utn.frc.tup.lciii.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("weather/")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("{id}"
    )
    public ResponseEntity<WeatherResponse> getWeatherByLocationAndDate(@PathVariable Long id,
                                                                       @RequestParam String dateTime,
                                                                       @RequestParam Long client_id,
                                                                       @RequestParam String secret){
        return ResponseEntity.ok(weatherService.getLocationWeatherByDateTime(id, dateTime, client_id, secret));
    }

    @PostMapping("subscribe")
    public ResponseEntity<ClientResponse> subscribe(@RequestBody ClientRequest client){
        return ResponseEntity.ok(weatherService.suscribe(client));
    }
}
