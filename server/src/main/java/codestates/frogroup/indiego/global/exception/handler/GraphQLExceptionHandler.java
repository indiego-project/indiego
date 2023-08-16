package codestates.frogroup.indiego.global.exception.handler;

import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import graphql.GraphQLError;
import graphql.schema.DataFetchingEnvironment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.execution.DataFetcherExceptionResolver;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.List;

@Slf4j
@Component
public class GraphQLExceptionHandler implements DataFetcherExceptionResolver {

    @Override
    public Mono<List<GraphQLError>> resolveException(Throwable exception, DataFetchingEnvironment environment) {
        if (exception instanceof BusinessLogicException) {
            BusinessLogicException businessLogicException = (BusinessLogicException) exception;
            return Mono.just(Collections.singletonList(businessLogicException));
        }
        return Mono.empty();
    }
}