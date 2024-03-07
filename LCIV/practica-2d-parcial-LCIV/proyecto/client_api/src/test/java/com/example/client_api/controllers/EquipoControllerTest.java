package com.example.client_api.controllers;

import com.example.client_api.dtos.responses.Equipo;
import com.example.client_api.services.EquipoService;
import com.example.client_api.services.EquipoServiceImpTest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@WebMvcTest(EquipoController.class)
public class EquipoControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private EquipoService equipoService;
    @Autowired
    private EquipoController equipoController;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void obtenerEquipos() throws Exception {

        when(equipoService.obtenerEquipos()).thenReturn(new ArrayList<Equipo>());

        MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/equipos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new ArrayList<Equipo>()));

        mockMvc.perform(requestBuilder)
                .andDo(print())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
