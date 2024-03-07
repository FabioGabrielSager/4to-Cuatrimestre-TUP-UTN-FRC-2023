package ar.edu.utn.frc.tup.lciii.controllers;

import ar.edu.utn.frc.tup.lciii.dtos.common.cars.CarDto;
import ar.edu.utn.frc.tup.lciii.Services.CarsService;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/cars/")
public class CarsController {

    @Autowired
    private CarsService carsService;

    @GetMapping("{id}")
    public ResponseEntity<CarDto> getCar1(@PathVariable Long id){
        CarDto car = carsService.getCarWithLocalPrice(id);

        if(Objects.isNull(car)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The request has an error");
        } else{
            return ResponseEntity.ok(car);
        }
    }

    @GetMapping("historic/{id}")
    public ResponseEntity<CarDto> getCar2(@PathVariable Long id, @RequestParam LocalDate date){
        CarDto car = carsService.getCarWithHistoricalLocalPrice(id, date);

        if(Objects.isNull(car)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The request has an error");
        } else{
            return ResponseEntity.ok(car);
        }
    }
}
