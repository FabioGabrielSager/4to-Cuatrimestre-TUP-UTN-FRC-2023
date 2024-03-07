package com.car_api.controllers;

import com.car_api.dtos.CarDTO;
import com.car_api.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/car")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("getAuto/{id}")
    public ResponseEntity<CarDTO> getCar(@PathVariable Long id, @RequestParam String displayCurrency){
        return ResponseEntity.ok(this.carService.getCarById(id, displayCurrency));
    }
}
