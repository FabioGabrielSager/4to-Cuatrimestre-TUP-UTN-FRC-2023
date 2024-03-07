package ar.edu.utn.frc.tup.lciii.repositories;

import ar.edu.utn.frc.tup.lciii.entities.StateDataEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StateDataRepository extends JpaRepository<StateDataEntity, Long> {
}
