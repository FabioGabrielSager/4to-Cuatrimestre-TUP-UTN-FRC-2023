package com.enchagerate_api.controllers;

import com.enchagerate_api.services.ExchangeRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("exchange_rate/")
public class ExchangeRateController {

    @Autowired
    ExchangeRateService exchangeRateService;

    @GetMapping
    public ResponseEntity<BigDecimal> GetExchangeRate(@RequestParam String from, @RequestParam String to){
        return ResponseEntity.ok(exchangeRateService.getExchangeRate(from, to));
    }
}
