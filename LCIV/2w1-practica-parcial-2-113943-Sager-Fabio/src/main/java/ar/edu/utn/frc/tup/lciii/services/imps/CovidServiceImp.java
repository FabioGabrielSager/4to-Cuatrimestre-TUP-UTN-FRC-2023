package ar.edu.utn.frc.tup.lciii.services.imps;

import ar.edu.utn.frc.tup.lciii.clients.UsCovidDataClient;
import ar.edu.utn.frc.tup.lciii.dtos.StateCovidData;
import ar.edu.utn.frc.tup.lciii.dtos.StateCovidDataWithName;
import ar.edu.utn.frc.tup.lciii.entities.StateDataEntity;
import ar.edu.utn.frc.tup.lciii.repositories.StateDataRepository;
import ar.edu.utn.frc.tup.lciii.services.CovidService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class CovidServiceImp implements CovidService {

    @Autowired
    private UsCovidDataClient usCovidDataClient;

    @Autowired
    private StateDataRepository stateDataRepository;

    @Autowired
    private ModelMapper modelMapper;

    private final String[] statesInitials = {"AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA",
            "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN",
            "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK",
            "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "VI", "UT", "VT", "VA", "WA", "WV", "WI", "WY"};

    @Override
    public List<StateCovidData> getStateAllCovidData() {
        List<StateCovidData> statesData = new ArrayList<>(List.of(
                Objects.requireNonNull(usCovidDataClient.getAllStatesData().getBody())));
        List<StateCovidData> statesDataCovidResponse = new ArrayList<>();

        for (String si: statesInitials) {
            StateCovidData agroupedStateData = new StateCovidData();
            agroupedStateData.setInitials(si);
            for (int i = 0; i < statesData.size(); i++){
                if(Objects.equals(si, statesData.get(i).getInitials())){
                    agroupedStateData.setTotalTestResults(agroupedStateData.getTotalTestResults()
                            + statesData.get(i).getTotalTestResults());
                    agroupedStateData.setPositiveCases(agroupedStateData.getPositiveCases() +
                            statesData.get(i).getPositiveCases());
                    statesData.remove(i);
                }
            }
            statesDataCovidResponse.add(agroupedStateData);
        }

        return statesDataCovidResponse;
    }

    @Override
    public double getPositiveCasesPercentaje(String state, String date) {
        StateCovidData stateDate = usCovidDataClient.getDataByStateAndDate(state, date).getBody();

        return (((double) stateDate.getPositiveCases() / stateDate.getTotalTestResults()) * 100);
    }

    @Override
    public StateCovidDataWithName postStateCovidData(String state, String date) {
        StateDataEntity stateToSave = modelMapper
                .map(usCovidDataClient.getDataByStateAndDate(state, date).getBody(),
                        StateDataEntity.class);
        stateToSave.setName(usCovidDataClient.getStateNameByInitials(state));
        return modelMapper.map(stateDataRepository.save(stateToSave), StateCovidDataWithName.class);
    }

    @Override
    public List<StateCovidDataWithName> getData() {
        return List.of(modelMapper.map(stateDataRepository.findAll(), StateCovidDataWithName[].class));
    }
}
