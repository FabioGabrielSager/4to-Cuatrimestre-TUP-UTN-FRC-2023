package ar.edu.utn.frc.tup.lciii.controllers;

import ar.edu.utn.frc.tup.lciii.dtos.StateCovidData;
import ar.edu.utn.frc.tup.lciii.dtos.StateCovidDataWithName;
import ar.edu.utn.frc.tup.lciii.services.CovidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/v1/covid/")
public class CovidController {
    @Autowired
    private CovidService covidService;

    @GetMapping
    public List<StateCovidData> getAll(){
       return covidService.getStateAllCovidData();
    }

    @GetMapping("{estado}/{fecha}")
    public double getByStateAndDate(@PathVariable String estado, @PathVariable String fecha){
       return covidService.getPositiveCasesPercentaje(estado, fecha);
    }

    @PostMapping("{estado}/{fecha}")
    public StateCovidDataWithName postStateData(@PathVariable String estado, @PathVariable String fecha){
       return covidService.postStateCovidData(estado, fecha);
    }

    @GetMapping("getAll")
    public List<StateCovidDataWithName> getStateAll(){
        return covidService.getData();
    }
}
