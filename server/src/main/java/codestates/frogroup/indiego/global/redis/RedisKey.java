package codestates.frogroup.indiego.global.redis;

import org.springframework.stereotype.Component;

@Component
public class RedisKey {
    public static String SCORE_AVERAGE = "@scoreAverage";
    public static String VIEW_COUNT_KEY = ":article:viewCount";

    public String getScoreAverageKey(Long showId) {
        return showId.toString() + SCORE_AVERAGE;
    }

    public String getArticleViewKey(Long articleId) {
        return articleId.toString() + VIEW_COUNT_KEY;
    }

}
