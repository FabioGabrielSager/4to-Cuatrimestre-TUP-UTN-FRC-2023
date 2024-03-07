package com.car_api.repositories;

import com.car_api.entities.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CarJpaRepository extends JpaRepository<CarEntity, Long> {

    @Override
    Optional<CarEntity> findById(Long aLong);
}
