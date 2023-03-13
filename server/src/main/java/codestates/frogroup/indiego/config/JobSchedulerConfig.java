package codestates.frogroup.indiego.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;

@Slf4j
@Configuration
@RequiredArgsConstructor
public class JobSchedulerConfig {

    private final JobLauncher jobLauncher;
    private final Job job;

    @Scheduled(cron = "0 0 0 * * *")
    public void executeJob() throws Exception {
        JobParameters params = new JobParametersBuilder()
                .addString("job", String.valueOf(System.currentTimeMillis()))
                .toJobParameters();
        jobLauncher.run(job, params);
    }

}
