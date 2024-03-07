package ar.edu.utn.frc.tup.lciii.enteties;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Table(name = "access_logs")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccessLogEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private ClientEntity client;

    @Column
    private String query;

    @Column(name = "created_at")
    private ZonedDateTime createdAt;
}
