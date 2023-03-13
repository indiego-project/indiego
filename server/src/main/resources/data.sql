insert into member(email, password, nickname, address, image, introduction, created_at, modified_at)
values ('test1@naver.com', '1234', '테스트 밴드1', '강서구', 'https://user-images.githubusercontent.com/95069395/211246989-dd36a342-bf18-412e-b3ec-841ab3280d56.png',
       '테스트 밴드입니다!', now(), now());
insert into member(email, password, nickname, address, image, introduction, created_at, modified_at)
values ('test2@naver.com', '1234', '테스트 극단1', '강서구', 'https://user-images.githubusercontent.com/95069395/211246989-dd36a342-bf18-412e-b3ec-841ab3280d56.png',
       '테스트 밴드입니다!', now(), now());
insert into member(email, password, nickname, address, image, introduction, created_at, modified_at)
values ('test3@naver.com', '1234', '테스트 밴드2', '종로구', 'https://user-images.githubusercontent.com/95069395/211246989-dd36a342-bf18-412e-b3ec-841ab3280d56.png',
       '테스트 밴드입니다!', now(), now());
insert into member(email, password, nickname, address, image, introduction, created_at, modified_at)
values ('test4@naver.com', '1234', '테스트 극단2', '종로구', 'https://user-images.githubusercontent.com/95069395/211246989-dd36a342-bf18-412e-b3ec-841ab3280d56.png',
       '테스트 밴드입니다!', now(), now());
insert into member(email, password, nickname, address, image, introduction, created_at, modified_at)
values ('test5@naver.com', '1234', '테스트 밴드3', '강남구', 'https://user-images.githubusercontent.com/95069395/211246989-dd36a342-bf18-412e-b3ec-841ab3280d56.png',
       '테스트 밴드입니다!', now(), now());
insert into member(email, password, nickname, address, image, introduction, created_at, modified_at)
values ('test6@naver.com', '1234', '테스트 극단3', '강남구', 'https://user-images.githubusercontent.com/95069395/211246989-dd36a342-bf18-412e-b3ec-841ab3280d56.png',
       '테스트 밴드입니다!', now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 1, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 1, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 1, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 2, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 2, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 2, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 3, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 3, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 3, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 4, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 4, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 4, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 5, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 5, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 5, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 6, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 6, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 6, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 7, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 7, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 7, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 8, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 8, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 8, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 9, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 9, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 9, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 10, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 10, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 10, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 11, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 11, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 11, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 12, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 12, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 12, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 13, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 13, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 13, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 14, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 14, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 14, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 15, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 15, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 15, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 16, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 16, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 16, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 17, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 17, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 17, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 18, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 18, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 18, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 19, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 19, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 19, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 20, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 20, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 20, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 21, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 21, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 21, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 22, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 22, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 22, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 23, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 23, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 23, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 24, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 24, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 24, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 25, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 25, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 25, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 26, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 26, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 26, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 27, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 27, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 27, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 28, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 28, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 28, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 29, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 29, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 29, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 30, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 30, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 30, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 31, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 31, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 31, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 32, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 32, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 32, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 33, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 33, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 33, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 34, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 34, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 34, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 35, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 35, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 35, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 36, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 36, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 36, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 37, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 37, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 37, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 38, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 38, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 38, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 39, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 39, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 39, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 40, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 40, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 40, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 41, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 41, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 41, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 42, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 42, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 42, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 43, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 43, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 43, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 44, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 44, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 44, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 45, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 45, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 45, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 46, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 46, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 46, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 47, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 47, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 47, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 48, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 48, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 48, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 49, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 49, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 49, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 50, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 50, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 50, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 51, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 51, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 51, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 52, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 52, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 52, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 53, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 53, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 53, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 54, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 54, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 54, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 55, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 55, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 55, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 56, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 56, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 56, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 57, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 57, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 57, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 58, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 58, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 58, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 59, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 59, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 59, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 60, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 60, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 60, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 61, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 61, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 61, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 62, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 62, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 62, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 63, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 63, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 63, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 64, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 64, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 64, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 65, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 65, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 65, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 66, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 66, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 66, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 67, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 67, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 67, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 68, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 68, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 68, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 69, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 69, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 69, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 70, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 70, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 70, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 71, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 71, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 71, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 72, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 72, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 72, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 73, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 73, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 73, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 120, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 74, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 74, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 74, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 75, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 75, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 75, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 76, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 76, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 76, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 77, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 77, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 77, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 78, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 78, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 78, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 79, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 79, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 79, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 80, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 80, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 80, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 81, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 81, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 81, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 82, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 82, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 82, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 83, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 83, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 83, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 84, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 84, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 84, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 85, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 85, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 85, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 86, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 86, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 86, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 87, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 87, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 87, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 88, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 88, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 88, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 89, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 89, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 89, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 90, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 90, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 90, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 1, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 1, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 1, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 2, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 2, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 2, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 3, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 3, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 3, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 4, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 4, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 4, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 5, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 5, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 5, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 6, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 6, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 6, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 7, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 7, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 7, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 8, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 8, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 8, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 9, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 9, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 9, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 10, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 10, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 10, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 11, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 11, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 11, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 12, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 12, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 12, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 13, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 13, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 13, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 14, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 14, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 14, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 15, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 15, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 15, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 16, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 16, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 16, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 17, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 17, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 17, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 18, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 18, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 18, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 19, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 19, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 19, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 20, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 20, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 20, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 21, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 21, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 21, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 22, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 22, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 22, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 23, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 23, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 23, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 24, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 24, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 24, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 25, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 25, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 25, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 26, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 26, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 26, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 27, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 27, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 27, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 28, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 28, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 28, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 29, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 29, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 29, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 30, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 30, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 30, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 31, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 31, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 31, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 32, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 32, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 32, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 33, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 33, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 33, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 34, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 34, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 34, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 35, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 35, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 35, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 36, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 36, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 36, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 37, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 37, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 37, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 38, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 38, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 38, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 39, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 39, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 39, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 40, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 40, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 40, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 41, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 41, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 41, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 42, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 42, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 42, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 43, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 43, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 43, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 44, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 44, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 44, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 45, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 45, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 45, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 46, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 46, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 46, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 47, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 47, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 47, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 48, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 48, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 48, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 49, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 49, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 49, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 50, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 50, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 50, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 51, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 51, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 51, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 52, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 52, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 52, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 53, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 53, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 53, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 54, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 54, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 54, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 55, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 55, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 55, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 56, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 56, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 56, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 57, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 57, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 57, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 58, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 58, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 58, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 59, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 59, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 59, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 60, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 60, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 60, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 61, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 61, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 61, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 62, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 62, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 62, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 63, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 63, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 63, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 64, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 64, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 64, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 65, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 65, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 65, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 66, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 66, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 66, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 67, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 67, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 67, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 68, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 68, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 68, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 69, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 69, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 69, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 70, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 70, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 70, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 71, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 71, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 71, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 72, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 72, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 72, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 73, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 73, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 73, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 120, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 74, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 74, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 74, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 75, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 75, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 75, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 76, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 76, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 76, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 77, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 77, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 77, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 78, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 78, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 78, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 79, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 79, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 79, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 80, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 80, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 80, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 81, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 81, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 81, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 82, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 82, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 82, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 83, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 83, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 83, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 84, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 84, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 84, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 85, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 85, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 85, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 86, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 86, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 86, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 87, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 87, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 87, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 88, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 88, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 88, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 89, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 89, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 89, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 90, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 90, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 90, '몰라~', 8, now(), now());


insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 1, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 1, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 1, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 2, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 2, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 2, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 3, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 3, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 3, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 4, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 4, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 4, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 5, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 5, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 5, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 6, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 6, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 6, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 7, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 7, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 7, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 8, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 8, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 8, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 9, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 9, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 9, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 10, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 10, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 10, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 11, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 11, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 11, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 12, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 12, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 12, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 13, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 13, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 13, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 14, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 14, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 14, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 15, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 15, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 15, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 16, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 16, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 16, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 17, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 17, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 17, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '자유게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 18, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 18, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 18, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 19, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 19, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 19, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 20, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 20, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 20, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 21, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 21, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 21, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 22, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 22, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 22, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 23, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 23, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 23, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 24, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 24, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 24, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 25, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 25, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 25, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 26, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 26, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 26, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 27, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 27, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 27, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 28, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 28, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 28, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 29, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 29, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 29, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 30, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 30, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 30, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 31, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 31, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 31, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 32, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 32, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 32, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 33, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 33, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 33, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 34, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 34, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 34, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 35, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 35, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 35, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '홍보게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 36, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 36, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 36, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 37, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 37, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 37, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 38, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 38, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 38, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 39, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 39, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 39, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 40, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 40, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 40, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 41, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 41, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 41, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 42, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 42, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 42, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 43, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 43, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 43, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 44, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 44, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 44, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 45, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 45, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 45, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 46, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 46, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 46, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 47, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 47, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 47, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 48, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 48, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 48, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 49, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 49, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 49, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 50, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 50, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 50, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 51, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 51, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 51, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 52, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 52, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 52, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 53, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 53, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 53, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 54, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 54, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 54, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '구인게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 55, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 55, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 55, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 120, 3, now(), now());

insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 56, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 56, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 56, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 57, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 57, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 57, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 58, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 58, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 58, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 59, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 59, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 59, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 60, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 60, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 60, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 61, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 61, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 61, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 62, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 62, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 62, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 63, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 63, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 63, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 64, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 64, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 64, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 65, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 65, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 65, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 66, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 66, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 66, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 67, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 67, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 67, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 68, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 68, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 68, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 69, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 69, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 69, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 70, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 70, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 70, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 71, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 71, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 71, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 72, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 72, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 72, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '초청게시판', 1234, 25, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 73, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 73, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 73, '몰라~', 8, now(), now());



insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 120, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 74, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 74, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 74, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 119, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (1, 75, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 75, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 75, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 110, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 76, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 76, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 76, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 121, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 77, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 77, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 77, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 124, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 78, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 78, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 78, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 128, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 79, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 79, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 79, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 11, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 80, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 80, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 80, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 181, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 81, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 81, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 81, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 221, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 82, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 82, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 82, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 1214, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 83, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 83, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 83, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 9, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 84, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 84, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 84, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (6, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 2, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 85, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 85, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 85, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (1, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 1, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 86, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 86, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 86, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (2, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 4, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 87, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 87, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 87, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (3, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 78, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 88, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 88, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 88, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (4, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 76, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 89, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 89, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 89, '몰라~', 8, now(), now());

insert into article(member_id, title, content, image, category, view, like_count, article_comment_count, created_at, modified_at)
values (5, '강서구 공연 뭐있음?', '화곡역 근처였음 좋겠음', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '후기게시판', 1234, 54, 3, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (2, 90, '내일 화곡초 체육관에서 함', 10, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (3, 90, '내일 화곡고 체육관도 있음', 9, now(), now());
insert into article_comment(member_id, article_id, comment, like_count, created_at, modified_at)
values (4, 90, '몰라~', 8, now(), now());

-- 공연
insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54322255, 126.84603504, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.550833, 126.849650, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.55779089, 126.83513707, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.55889955, 126.80403102, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54694797, 126.84755135, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.54791491, 126.84351265, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.58111322, 126.97857035, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.57919097, 126.98031513, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.57958558, 126.97702431, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.57672424, 126.98340964, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.4965304, 127.024758, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49358632, 127.05160445, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.48711677, 127.06057979, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.49981329, 127.04349942, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.50553218, 127.05690207, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49711121, 127.05713757, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 3, 2.0, '재미 없었음!!', now(), now());


-- 공연
insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54322255, 126.84603504, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.550833, 126.849650, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.55779089, 126.83513707, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.55889955, 126.80403102, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54694797, 126.84755135, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.54791491, 126.84351265, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.58111322, 126.97857035, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.57919097, 126.98031513, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.57958558, 126.97702431, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.57672424, 126.98340964, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.4965304, 127.024758, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49358632, 127.05160445, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.48711677, 127.06057979, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.49981329, 127.04349942, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.50553218, 127.05690207, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49711121, 127.05713757, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 3, 2.0, '재미 없었음!!', now(), now());


-- 공연
insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54322255, 126.84603504, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.550833, 126.849650, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.55779089, 126.83513707, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.55889955, 126.80403102, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54694797, 126.84755135, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.54791491, 126.84351265, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.58111322, 126.97857035, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.57919097, 126.98031513, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.57958558, 126.97702431, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.57672424, 126.98340964, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.4965304, 127.024758, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49358632, 127.05160445, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.48711677, 127.06057979, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.49981329, 127.04349942, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.50553218, 127.05690207, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49711121, 127.05713757, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 3, 2.0, '재미 없었음!!', now(), now());


-- 공연
insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54322255, 126.84603504, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.550833, 126.849650, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.55779089, 126.83513707, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.55889955, 126.80403102, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54694797, 126.84755135, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.54791491, 126.84351265, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.58111322, 126.97857035, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.57919097, 126.98031513, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.57958558, 126.97702431, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.57672424, 126.98340964, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.4965304, 127.024758, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49358632, 127.05160445, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.48711677, 127.06057979, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.49981329, 127.04349942, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.50553218, 127.05690207, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49711121, 127.05713757, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 3, 2.0, '재미 없었음!!', now(), now());


-- 공연
insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54322255, 126.84603504, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.550833, 126.849650, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.55779089, 126.83513707, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.55889955, 126.80403102, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54694797, 126.84755135, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.54791491, 126.84351265, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.58111322, 126.97857035, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.57919097, 126.98031513, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.57958558, 126.97702431, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.57672424, 126.98340964, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.4965304, 127.024758, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49358632, 127.05160445, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.48711677, 127.06057979, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.49981329, 127.04349942, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.50553218, 127.05690207, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49711121, 127.05713757, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 3, 2.0, '재미 없었음!!', now(), now());


-- 공연
insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54322255, 126.84603504, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (1, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.550833, 126.849650, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (2, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (1, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.55779089, 126.83513707, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (3, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.55889955, 126.80403102, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (4, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.54694797, 126.84755135, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (5, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (2, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강서구', '강서구 초록마을로 28', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.54791491, 126.84351265, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (6, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (7, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.58111322, 126.97857035, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (8, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (3, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.5814696, 126.9849519, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (9, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.57919097, 126.98031513, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (10, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.57958558, 126.97702431, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (11, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (4, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '종로구', '북촌 한옥마을', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.57672424, 126.98340964, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (12, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.4965304, 127.024758, 'SALE', 4.00, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (13, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49358632, 127.05160445, 'SALE', 4.37, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (14, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (5, '밴드공연합니다', '밴드공연 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '음악', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-02-01', '18:00', '공연 상세 설명입니다.', 37.48711677, 127.06057979, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (15, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-29', '18:00', '공연 상세 설명입니다.', 37.49981329, 127.04349942, 'SALE', 4.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (16, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-30', '18:00', '공연 상세 설명입니다.', 37.50553218, 127.05690207, 'SALE', 3.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (17, 3, 2.0, '재미 없었음!!', now(), now());

insert into shows(member_id, title, content, image, category, price, address, detail_address, expired_at, show_at, show_time, detail_description, latitude, longitude, status, score_average, total, created_at, modified_at)
values (6, '연극합니다', '무대연극 하지롱', 'https://en.pimg.jp/052/411/926/1/52411926.jpg', '연극', 5000, '강남구', '코드스테이츠 본사', '2023-02-05', '2023-01-31', '18:00', '공연 상세 설명입니다.', 37.49711121, 127.05713757, 'SALE', 2.65, 50, now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 1, 4.0, '재미있었어요~!', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 2, 3.0, '그냥 볼만 함', now(), now());
insert into show_comment(show_id, member_id, score, comment, created_at, modified_at)
values (18, 3, 2.0, '재미 없었음!!', now(), now());

