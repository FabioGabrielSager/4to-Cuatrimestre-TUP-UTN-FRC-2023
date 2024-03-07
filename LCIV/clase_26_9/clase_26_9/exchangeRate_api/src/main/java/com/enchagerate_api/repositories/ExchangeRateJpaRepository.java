package com.enchagerate_api.repositories;

import com.enchagerate_api.entities.ExchangeRateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExchangeRateJpaRepository extends JpaRepository<ExchangeRateEntity, Long> {
    Optional<ExchangeRateEntity> findBySourceCurrencyAndTargetCurrency(String sourceCurrency, String targetCurrency);
}
