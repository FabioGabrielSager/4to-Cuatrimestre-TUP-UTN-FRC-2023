package com.example.client_api.repositories;


import com.example.client_api.entities.EquipoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipoRepository extends JpaRepository<EquipoEntity, Long> {
}
