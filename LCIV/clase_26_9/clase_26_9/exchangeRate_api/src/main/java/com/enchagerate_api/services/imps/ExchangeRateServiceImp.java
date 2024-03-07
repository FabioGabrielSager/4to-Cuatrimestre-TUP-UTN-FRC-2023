package com.enchagerate_api.services.imps;

import com.enchagerate_api.entities.ExchangeRateEntity;
import com.enchagerate_api.repositories.ExchangeRateJpaRepository;
import com.enchagerate_api.services.ExchangeRateService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class ExchangeRateServiceImp implements ExchangeRateService {

    @Autowired
    private ExchangeRateJpaRepository repository;

    @Override
    public BigDecimal getExchangeRate(String from, String to) {
        Optional<ExchangeRateEntity> exchangeRateEntityOptional =
                repository.findBySourceCurrencyAndTargetCurrency(from, to);

        if(exchangeRateEntityOptional.isEmpty()){
            throw new EntityNotFoundException(String.format("Exchange rate of %s to %s doesn't founded", from, to));
        }
        return exchangeRateEntityOptional.get().getEx_rate();
    }
}
