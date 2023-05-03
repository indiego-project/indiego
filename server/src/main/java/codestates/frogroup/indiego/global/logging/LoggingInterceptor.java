package codestates.frogroup.indiego.global.logging;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
public class LoggingInterceptor extends HandlerInterceptorAdapter {
    private static final Logger logger = LoggerFactory.getLogger(LoggingInterceptor.class);

    private final ObjectMapper objectMapper;

    public LoggingInterceptor(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
        objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (request.getClass().getName().contains("SecurityContextHolderAwareRequestWrapper")) return true;
        String request_id = UUID.randomUUID().toString();
        MDC.put("request_id", request_id);

        final ContentCachingRequestWrapper cachingRequest = new ContentCachingRequestWrapper(request);

        logger.info("Request URL : {}", ServletUriComponentsBuilder.fromRequest(cachingRequest).toUriString());
        logger.info("Request Method : {}", cachingRequest.getMethod());
        logger.info("Request Header : {}", objectMapper.writeValueAsString(cachingRequest.getHeaderNames()));
        logger.info("Request Body : {}", new String(cachingRequest.getContentAsByteArray()));
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (request.getClass().getName().contains("SecurityContextHolderAwareRequestWrapper")) return;
        final ContentCachingResponseWrapper cachingResponse = (ContentCachingResponseWrapper) response;

        logger.info("Response Status : {}", cachingResponse.getStatus());
        logger.info("Response Header : {}", objectMapper.writeValueAsString(cachingResponse.getHeaderNames()));
        logger.info("Response Body : {}", new String(cachingResponse.getContentAsByteArray()));

        cachingResponse.copyBodyToResponse();
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        MDC.remove("request_id");
    }
}