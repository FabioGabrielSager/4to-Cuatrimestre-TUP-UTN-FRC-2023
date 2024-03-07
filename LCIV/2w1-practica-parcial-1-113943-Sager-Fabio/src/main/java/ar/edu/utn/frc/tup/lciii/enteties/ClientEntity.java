package ar.edu.utn.frc.tup.lciii.enteties;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "client")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String secret;

    @Column(name = "temperature_unit")
    private char temperatureUnit;

    @Column
    private String email;

    @OneToMany(mappedBy = "client")
    private List<AccessLogEntity> accessLog;
}
