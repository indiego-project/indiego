package codestates.frogroup.indiego.domain.show.repository;

import codestates.frogroup.indiego.global.redis.RedisDao;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ScoreRepository extends RedisDao {
    public ScoreRepository(RedisTemplate<String, Object> redisTemplate) {
        super(redisTemplate);
    }
}
