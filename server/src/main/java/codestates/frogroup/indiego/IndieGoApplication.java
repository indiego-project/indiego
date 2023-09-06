package codestates.frogroup.indiego;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@EnableJpaAuditing
@SpringBootApplication
@EnableJpaRepositories
public class IndieGoApplication {

	public static void main(String[] args) {
		SpringApplication.run(IndieGoApplication.class, args);
	}

}
