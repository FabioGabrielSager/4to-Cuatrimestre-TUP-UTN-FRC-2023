package ar.edu.utn.frc.tup.lciii.clients;

import ar.edu.utn.frc.tup.lciii.dtos.StateCovidData;
import ar.edu.utn.frc.tup.lciii.dtos.StateCovidDataWithName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class UsCovidDataClient {

    @Autowired
    private RestTemplate restTemplate;

    public ResponseEntity<StateCovidData[]> getAllStatesData(){
        String url = "https://api.covidtracking.com/v1/states/current.json";
        return restTemplate.getForEntity(url, StateCovidData[].class);
    }

    public ResponseEntity<StateCovidData> getDataByStateAndDate(String stateInitials, String date){
        String url = String.format("https://api.covidtracking.com/v1/states/%s/%s.json", stateInitials, date);
        return restTemplate.getForEntity(url, StateCovidData.class);
    }

    public String getStateNameByInitials(String initials){
        String url = "https://api.covidtracking.com/v1/states/info.json";
        List<StateCovidDataWithName> statesMetadata = List.of(
                Objects.requireNonNull(restTemplate.getForEntity(url, StateCovidDataWithName[].class).getBody())
        );

        for (StateCovidDataWithName s: statesMetadata) {
            if(Objects.equals(s.getInitials(), initials.toUpperCase()))
                return s.getName();
        }
        return "";
    }
}
