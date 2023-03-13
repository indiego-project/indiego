package codestates.frogroup.indiego.config;

import codestates.frogroup.indiego.domain.article.entity.Article;
import codestates.frogroup.indiego.domain.article.repository.ArticleRepository;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.repository.ScoreRepository;
import codestates.frogroup.indiego.domain.show.repository.ShowRepository;
import codestates.frogroup.indiego.global.redis.RedisKey;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Slf4j
@Configuration
@EnableBatchProcessing
@RequiredArgsConstructor
@Transactional
public class BatchConfig {

    private final JobBuilderFactory jobBuilderFactory;
    private final StepBuilderFactory stepBuilderFactory;
    private final ArticleRepository articleRepository;
    private final ShowRepository showRepository;
    private final ScoreRepository scoreRepository;
    private final RedisTemplate<String, Long> redisTemplateLong;
    private final RedisTemplate<String, Object> redisTemplate;
    private final RedisKey redisKey;

    @Bean
    public Job job() {
        return jobBuilderFactory.get("job") // job 이름
                .start(step1())
                .next(step2())
                .build();
    }

    @Bean
    public Step step1() {
        return stepBuilderFactory.get("step1")
                .tasklet(new Tasklet() {
                    @Override
                    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
                        log.info("step1 실행");
                        updateShowRDB();
                        return RepeatStatus.FINISHED;
                    }
                })
                .build();
    }

    @Bean
    public Step step2() {
        return stepBuilderFactory.get("step2")
                .tasklet(new Tasklet() {
                    @Override
                    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
                        log.info("step2 실행");
                        updateArticleRDB();
                        return RepeatStatus.FINISHED;
                    }
                })
                .build();
    }

    public void updateShowRDB() {
        ScanOptions scanOptions = ScanOptions.scanOptions().match("*@scoreAverage").build();
        Cursor<byte[]> keys = redisTemplate.getConnectionFactory().getConnection().scan(scanOptions);

        while (keys.hasNext()) {
            Long showId = extractShowId(keys);
            Show show = showRepository.findById(showId).get();
            String key = redisKey.getScoreAverageKey(showId);
            show.setScoreAverage(Double.parseDouble(scoreRepository.getValues(key)));
            scoreRepository.deleteValues(key);

            if(show.getShowBoard().getExpiredAt().isBefore(LocalDate.now())){
                show.setStatus(Show.ShowStatus.EXPIRED);
            }
        }
    }

    private Long extractShowId(Cursor<byte[]> keys) {
        String key = new String(keys.next());
        int index = key.indexOf("@");
        return Long.valueOf(key.substring(0, index));
    }

    public void updateArticleRDB() {
        ScanOptions scanOptions = ScanOptions.scanOptions().match("*:article:viewCount").build();
        Cursor<byte[]> keys = redisTemplateLong.getConnectionFactory().getConnection().scan(scanOptions);

        while (keys.hasNext()) {
            Long articleId = extractArticleId(keys);
            Article article = articleRepository.findById(articleId).get();
            String key = redisKey.getArticleViewKey(articleId);
            article.setView(articleRepository.getValues(key));
            scoreRepository.deleteValues(key);
        }
    }

    private Long extractArticleId(Cursor<byte[]> keys) {
        String key = new String(keys.next());
        int index = key.indexOf(":");
        return Long.valueOf(key.substring(0, index));
    }
}
