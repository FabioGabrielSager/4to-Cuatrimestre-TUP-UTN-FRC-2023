package ar.edu.utn.frc.tup.lciii.Services;

import ar.edu.utn.frc.tup.lciii.dtos.common.cars.CarDto;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public interface CarsService {
    CarDto getCarWithLocalPrice(Long id);
    CarDto getCarWithHistoricalLocalPrice(Long id, LocalDate date);
}
