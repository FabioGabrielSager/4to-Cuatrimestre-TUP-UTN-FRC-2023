package ar.edu.utn.frc.tup.lciii.services;

import ar.edu.utn.frc.tup.lciii.dtos.StateCovidData;
import ar.edu.utn.frc.tup.lciii.dtos.StateCovidDataWithName;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface CovidService {
    List<StateCovidData> getStateAllCovidData();
    double getPositiveCasesPercentaje(String state, String date);
    StateCovidDataWithName postStateCovidData(String state, String date);
    List<StateCovidDataWithName> getData();
}
