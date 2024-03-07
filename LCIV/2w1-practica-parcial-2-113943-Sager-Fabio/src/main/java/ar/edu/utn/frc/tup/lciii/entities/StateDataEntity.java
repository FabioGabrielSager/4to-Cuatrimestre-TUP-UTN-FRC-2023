package ar.edu.utn.frc.tup.lciii.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "state_data")
public class StateDataEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String initials = "";
    @Column
    private String name = "";
    @Column(name = "total_test_results")
    private Integer totalTestResults = 0;
    @Column(name = "positive_cases")
    private Integer positiveCases = 0;

}
