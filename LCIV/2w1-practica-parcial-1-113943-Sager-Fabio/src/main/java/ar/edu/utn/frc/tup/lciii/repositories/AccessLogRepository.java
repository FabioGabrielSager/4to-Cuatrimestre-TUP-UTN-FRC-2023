package ar.edu.utn.frc.tup.lciii.repositories;

import ar.edu.utn.frc.tup.lciii.enteties.AccessLogEntity;
import ar.edu.utn.frc.tup.lciii.enteties.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccessLogRepository extends JpaRepository<AccessLogEntity, Long> {
    Optional<AccessLogEntity> findAccessLogEntitiesByClient(ClientEntity client);
}
