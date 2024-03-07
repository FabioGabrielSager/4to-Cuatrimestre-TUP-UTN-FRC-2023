package com.car_api.services.imps;

import com.car_api.clients.ExchangeRateClient;
import com.car_api.dtos.CarDTO;
import com.car_api.entities.CarEntity;
import com.car_api.repositories.CarJpaRepository;
import com.car_api.services.CarService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Objects;
import java.util.Optional;

@Service
public class CarServiceImp implements CarService {

    @Autowired
    private CarJpaRepository repository;
    @Autowired
    private ExchangeRateClient exchangeRateClient;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CarDTO getCarById(Long id, String displayCurrency) {
        Optional<CarEntity> carEntityOptional = repository.findById(id);

        if(carEntityOptional.isEmpty())
            throw new EntityNotFoundException("No se encontro un auto con la id: " + id);

        CarEntity carEntity = carEntityOptional.get();

        BigDecimal exRate = Objects.requireNonNull(
                exchangeRateClient.getExchangeRate(carEntity.getCurrency(),
                displayCurrency)).getBody();

        CarDTO response = modelMapper.map(carEntity, CarDTO.class);
        response.setLocalPrice(exRate.multiply(carEntity.getPrice()));

        return response;
    }
}
