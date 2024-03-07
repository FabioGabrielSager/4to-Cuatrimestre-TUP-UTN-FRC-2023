package ar.edu.utn.frc.tup.lciii.Services.Imps;

import ar.edu.utn.frc.tup.lciii.client.cars.CarsClient;
import ar.edu.utn.frc.tup.lciii.dtos.common.clients.cars.GetCarDTO;
import ar.edu.utn.frc.tup.lciii.client.exchanges_Rates.ExchangeRatesClient;
import ar.edu.utn.frc.tup.lciii.client.exchanges_Rates.HistoricalExchageRatesClient;
import ar.edu.utn.frc.tup.lciii.dtos.common.cars.CarDto;
import ar.edu.utn.frc.tup.lciii.Services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;

@Service
public class CarServiceImp implements CarsService {

    @Autowired
    private CarsClient carsClient;
    @Autowired
    private ExchangeRatesClient exchangeRatesClient;
    @Autowired
    private HistoricalExchageRatesClient historicalExchangeRateClient;


    @Override
    public CarDto getCarWithLocalPrice(Long id) {
        ResponseEntity<GetCarDTO> responseEntityCar = carsClient.getCar(id);

        BigDecimal local_price = calculateLocalPrice(responseEntityCar.getBody().price().currency(), "ARS",
                responseEntityCar.getBody().price().amount());

        return new CarDto(responseEntityCar.getBody().model(), responseEntityCar.getBody().brand(),
                local_price);
    }

    private BigDecimal calculateLocalPrice(String fromCurrency, String toCurrency, BigDecimal price) {
        return exchangeRatesClient.getExchangeRate(fromCurrency, toCurrency).multiply(price);
    }

    @Override
    public CarDto getCarWithHistoricalLocalPrice(Long id, LocalDate date) {
        ResponseEntity<GetCarDTO> responseEntityCar = carsClient.getCar(id);

        BigDecimal local_price = calculateHistoricalLocalPrice(responseEntityCar.getBody().price().currency(),
                "ARS", date,
                responseEntityCar.getBody().price().amount());

        return new CarDto(responseEntityCar.getBody().model(), responseEntityCar.getBody().brand(),
                local_price);
    }

    private BigDecimal calculateHistoricalLocalPrice(String fromCurrency, String toCurrency, LocalDate date,
                                                     BigDecimal price) {
        return historicalExchangeRateClient.getHistoricalExchangeRate(fromCurrency, toCurrency, date).multiply(price);
    }
}
