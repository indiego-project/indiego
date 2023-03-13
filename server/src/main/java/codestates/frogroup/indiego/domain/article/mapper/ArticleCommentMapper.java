package codestates.frogroup.indiego.domain.article.mapper;

import codestates.frogroup.indiego.domain.article.entity.ArticleComment;
import codestates.frogroup.indiego.domain.article.dto.ArticleCommentDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.*;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ArticleCommentMapper {

    ArticleComment articleCommentPostToArticleComment(ArticleCommentDto.Post requestBody);

    ArticleComment articleCommentPatchToArticleComment(ArticleCommentDto.Patch requestBody);

    @Mapping(source = "article.id", target = "articleId")
    @Mapping(source = "member.id", target = "memberId")
    @Mapping(source = "member.profile.image", target = "image")
    @Mapping(source = "member.profile.nickname", target = "nickname")
    @Mapping(target = "likeCount",
            expression = "java(articleComment.getArticleCommentLikes() !=" +
                    " null ? articleComment.getArticleCommentLikes().size() : 0)")
    ArticleCommentDto.Response articleCommentToArticleCommentResponse(ArticleComment articleComment);

//    List<ArticleCommentDto.Response> articleCommentsToArticleCommentResponses(List<ArticleComment> articleComments);

    default List<ArticleCommentDto.Response> articleCommentsToArticleCommentResponses(List<ArticleComment> articleComments) {
        if (articleComments == null) {
            return null;
        } else {
            List<ArticleCommentDto.Response> list = articleComments
                    .stream()
                    .map(this::articleCommentToArticleCommentResponse)
                    .sorted(Comparator.comparing(ArticleCommentDto.Response::getCreatedAt).reversed())
                    .collect(Collectors.toList());

            return list;
        }
    }
}
