package ar.edu.utn.frc.tup.lciii.clients;

import ar.edu.utn.frc.tup.lciii.configs.RestTemplateConfig;
import ar.edu.utn.frc.tup.lciii.dtos.StateCovidData;
import ar.edu.utn.frc.tup.lciii.dtos.StateCovidDataWithName;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.client.MockRestServiceServer;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withStatus;

@RestClientTest(UsCovidDataClient.class)
@Import(RestTemplateConfig.class)
public class UsCovidDataClientTest {
    @Autowired
    private UsCovidDataClient usCovidDataClient;

    @Autowired
    private MockRestServiceServer mockServer;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void getAllStatesData(){
        this.mockServer.expect(requestTo("https://api.covidtracking.com/v1/states/current.json"))
                .andRespond(withStatus(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON));

        ResponseEntity<StateCovidData[]> response = this.usCovidDataClient.getAllStatesData();

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        mockServer.verify();
    }

    @Test
    public void GetDataByStateAndDateTest(){
        this.mockServer.expect(requestTo("https://api.covidtracking.com/v1/states/ca/20200501.json"))
                .andRespond(withStatus(HttpStatus.OK));

        ResponseEntity<StateCovidData> response =
                this.usCovidDataClient.getDataByStateAndDate("ca", "20200501");

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        mockServer.verify();
    }

    @Test
    public void getStateNameByInitials() throws JsonProcessingException {
        String mockUrl = "https://api.covidtracking.com/v1/states/info.json";
        StateCovidDataWithName[] mockData = {
                new StateCovidDataWithName("NY", "New York", 1000, 500),
                new StateCovidDataWithName("CA", "California", 2000, 1000)
        };
        ResponseEntity<StateCovidDataWithName[]> mockResponse = new ResponseEntity<>(mockData, HttpStatus.OK);
        this.mockServer.expect(requestTo(mockUrl)).andRespond(withStatus(HttpStatus.OK)
                        .contentType(MediaType.APPLICATION_JSON)
                .body(new ObjectMapper()
                .writeValueAsString(mockData)));

        String stateName = this.usCovidDataClient.getStateNameByInitials("NY");

        assertThat(stateName).isEqualTo("New York");
        this.mockServer.verify();
    }

    @Test
    public void getStateNameByInitials1() throws JsonProcessingException {
        String mockUrl = "https://api.covidtracking.com/v1/states/info.json";
        StateCovidDataWithName[] mockData = {
                new StateCovidDataWithName("NY", "New York", 1000, 500),
                new StateCovidDataWithName("CA", "California", 2000, 1000)
        };
        ResponseEntity<StateCovidDataWithName[]> mockResponse = new ResponseEntity<>(mockData, HttpStatus.OK);
        this.mockServer.expect(requestTo(mockUrl)).andRespond(withStatus(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(new ObjectMapper()
                        .writeValueAsString(mockData)));

        String stateName = this.usCovidDataClient.getStateNameByInitials("ASD");

        assertThat(stateName).isEqualTo("");
        this.mockServer.verify();
    }
}
