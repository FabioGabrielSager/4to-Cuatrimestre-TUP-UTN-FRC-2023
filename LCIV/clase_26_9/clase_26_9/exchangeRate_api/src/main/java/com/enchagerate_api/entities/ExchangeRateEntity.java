package com.enchagerate_api.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
public class ExchangeRateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "source_currency")
    private String sourceCurrency;

    @Column(name = "target_currency")
    private String targetCurrency;

    @Column(name = "exchange_rate")
    private BigDecimal ex_rate;
}

