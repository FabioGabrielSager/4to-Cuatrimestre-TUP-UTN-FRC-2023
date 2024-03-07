package com.enchagerate_api.services;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public interface ExchangeRateService {
    BigDecimal getExchangeRate(String from, String to);
}
