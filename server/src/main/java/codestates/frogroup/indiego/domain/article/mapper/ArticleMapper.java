package codestates.frogroup.indiego.domain.article.mapper;

import codestates.frogroup.indiego.domain.article.entity.Article;
import codestates.frogroup.indiego.domain.article.dto.ArticleDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = ArticleCommentMapper.class)
public interface ArticleMapper {

    @Mapping(source = "title", target = "board.title")
    @Mapping(source = "content", target = "board.content")
    @Mapping(source = "image", target = "board.image")
    @Mapping(source = "category", target = "board.category")
    Article articlePostToArticle(ArticleDto.Post requestBody);

    @Mapping(source = "title", target = "board.title")
    @Mapping(source = "content", target = "board.content")
    @Mapping(source = "image", target = "board.image")
    @Mapping(source = "category", target = "board.category")
    Article articlePatchToArticle(ArticleDto.Patch requestBody);

    @Mapping(source = "member.id", target = "memberId")
    @Mapping(source = "board.title", target = "title")
    @Mapping(source = "board.content", target = "content")
    @Mapping(source = "board.image", target = "image")
    @Mapping(source = "board.category", target = "category")
    @Mapping(source = "member.profile.nickname", target = "nickname")
    @Mapping(target = "articleCommentCount",
            expression = "java(article.getArticleComments() != null ? article.getArticleComments().size() : 0)")
    ArticleDto.Response articleToArticleResponse(Article article);

    @Mapping(source = "board.title", target = "title")
    @Mapping(source = "board.content", target = "content")
    @Mapping(source = "board.image", target = "image")
    @Mapping(source = "board.category", target = "category")
    List<ArticleDto.Response> articlesToArticleResponses(List<Article> articles);

}
