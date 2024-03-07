package ar.edu.utn.frc.tup.lciii.configs;

import ar.edu.utn.frc.tup.lciii.clients.dtos.AirQualityDto;
import ar.edu.utn.frc.tup.lciii.clients.dtos.CloudinessDto;
import ar.edu.utn.frc.tup.lciii.dtos.response.AirQualityResponse;
import ar.edu.utn.frc.tup.lciii.dtos.response.CloudinessResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Conditions;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MappersConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        Converter<AirQualityDto, AirQualityResponse> airQualityDtoToAirQualityResponseConverter =
                new AbstractConverter<AirQualityDto, AirQualityResponse>() {
                    @Override
                    protected AirQualityResponse convert(AirQualityDto source) {
                        int qualityIndex = source.quality();
                        String qualityDescription = "";
                        if(qualityIndex < 51) qualityDescription = "Good";
                        if(qualityIndex > 50 && qualityIndex < 101) qualityDescription = "Moderate";
                        if(qualityIndex > 100 && qualityIndex < 151) qualityDescription = "Unhealthy for Sensitive Groups";
                        if(qualityIndex > 150 && qualityIndex < 201) qualityDescription = "Unhealthy";
                        if(qualityIndex > 200 && qualityIndex < 301) qualityDescription = "Very Unhealthy";
                        if(qualityIndex > 300 && qualityIndex < 501) qualityDescription = "Hazardous";

                        return AirQualityResponse.builder().index(source.quality()).description(qualityDescription).build();
                    }
                };

        Converter<CloudinessDto, CloudinessResponse> cloudinessDtoToCloudinessResponseConverter =
                new AbstractConverter<CloudinessDto, CloudinessResponse>() {
                    @Override
                    protected CloudinessResponse convert(CloudinessDto source) {
                        int cloudinessIndex = source.cloudiness();
                        String cloudinessDescription = "";
                        if(cloudinessIndex == 0) cloudinessDescription = "Clear sky";
                        if(cloudinessIndex > 0 && cloudinessIndex < 4) cloudinessDescription = "Few clouds";
                        if(cloudinessIndex > 3 && cloudinessIndex < 7) cloudinessDescription = "Sky half cludy";
                        if(cloudinessIndex > 6 && cloudinessIndex < 9) cloudinessDescription = "Sky completely cludy";

                        return CloudinessResponse.builder()
                                .index(source.cloudiness())
                                .description(cloudinessDescription)
                                .build();
                    }
                };

        modelMapper.addConverter(airQualityDtoToAirQualityResponseConverter);
        modelMapper.addConverter(cloudinessDtoToCloudinessResponseConverter);
        return modelMapper;
    }

    @Bean("mergerMapper")
    public ModelMapper mergerMapper() {
        ModelMapper mapper =  new ModelMapper();
        mapper.getConfiguration()
                .setPropertyCondition(Conditions.isNotNull());
        return mapper;
    }

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

}
