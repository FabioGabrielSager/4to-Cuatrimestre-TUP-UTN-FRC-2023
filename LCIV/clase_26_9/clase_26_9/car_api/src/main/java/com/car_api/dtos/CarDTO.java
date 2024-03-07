package com.car_api.dtos;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CarDTO {
    private String model;
    private BigDecimal localPrice;
}
