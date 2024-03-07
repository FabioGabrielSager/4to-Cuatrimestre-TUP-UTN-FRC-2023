package com.car_api.services;

import com.car_api.dtos.CarDTO;

public interface CarService {
    CarDTO getCarById(Long id, String displayCurrency);
}
