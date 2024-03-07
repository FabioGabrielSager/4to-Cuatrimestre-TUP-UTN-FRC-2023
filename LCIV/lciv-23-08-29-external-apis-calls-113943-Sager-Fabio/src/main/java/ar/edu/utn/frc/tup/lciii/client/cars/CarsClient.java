package ar.edu.utn.frc.tup.lciii.client.cars;

import ar.edu.utn.frc.tup.lciii.dtos.common.clients.cars.GetCarDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class CarsClient {
    private RestTemplate restTemplate = new RestTemplate();

    @Value("${app.cars-url}")
    private String baseResourceURL;

    public ResponseEntity<GetCarDTO> getCar(Long id){
        return restTemplate.getForEntity(baseResourceURL + "/" + id, GetCarDTO.class);
    }
}
