package ar.edu.utn.frc.tup.lciii.controllers;

import ar.edu.utn.frc.tup.lciii.clients.dtos.LocationDto;
import ar.edu.utn.frc.tup.lciii.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/location")
public class LocationController {

    @Autowired
    WeatherService weatherService;

    @GetMapping("{client_id}")
    public LocationDto[] getLocations(@PathVariable Long client_id, @RequestParam String secret){
        return weatherService.getLocations(client_id, secret);
    }

}
