package ar.edu.utn.frc.tup.lciii.repositories;

import ar.edu.utn.frc.tup.lciii.enteties.ClientEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.TestPropertySource;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class ClientRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    ClientRepository clientRepository;

    @Test public void findByIdAndSecretTest(){
        ClientEntity client = ClientEntity.builder()
                .email("email@email.com")
                .temperatureUnit('C')
                .secret("asd-asd-asd")
                .build();

        client = entityManager.persist(client);
        entityManager.flush();

        Optional<ClientEntity> result = clientRepository.findByIdAndSecret(client.getId(), client.getSecret());
        assertEquals("email@email.com", result.get().getEmail());
    }
}
