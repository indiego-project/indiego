package codestates.frogroup.indiego.domain.show.controller;

import codestates.frogroup.indiego.config.BatchConfig;
import codestates.frogroup.indiego.config.JobSchedulerConfig;
import codestates.frogroup.indiego.domain.member.MemberFactory;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.repository.MemberRepository;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.show.mapper.ShowMapper;
import codestates.frogroup.indiego.domain.show.repository.ScoreRepository;
import codestates.frogroup.indiego.domain.show.repository.ShowRepository;
import codestates.frogroup.indiego.domain.show.service.MemberBookMarkService;
import codestates.frogroup.indiego.domain.show.service.ShowReservationService;
import codestates.frogroup.indiego.domain.show.service.ShowService;
import codestates.frogroup.indiego.domain.show.service.ShowTagService;
import codestates.frogroup.indiego.global.fileupload.AwsS3Service;
import codestates.frogroup.indiego.global.redis.RedisKey;
import codestates.frogroup.indiego.global.security.GsonTypeAdapter;
import codestates.frogroup.indiego.global.security.auth.userdetails.CustomUserDetailsService;
import codestates.frogroup.indiego.global.security.config.TestConfig;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
//import org.junit.Test;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonSerializer;
import org.joda.time.format.DateTimeFormatter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.test.context.support.TestExecutionEvent;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.anyLong;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@DisplayName("API 테스트")
//@WebMvcTest(controllers = ShowController.class)
@SpringBootTest
@Import(TestConfig.class)
@AutoConfigureMockMvc
@MockBean(JpaMetamodelMappingContext.class)
@Transactional
public class ShowControllerTest {
    private final String BASE_URL = "/shows";
//    @Autowired
//    private Gson gson;
    @Autowired
    private MockMvc mockMvc;

    private Gson gson;


//    private final MockMvc mockMvc;

//    public ShowControllerTest(
//            @Autowired MockMvc mockMvc,
//            @Autowired Gson gson)
//    {
//        this.mockMvc = mockMvc;
//        this.gson = gson;
//    }

    @MockBean
    ShowCommentController showCommentController;
    @Autowired
    private ShowRepository showRepository;

    @MockBean
    BatchConfig batchConfig;

    @MockBean
    JobSchedulerConfig jobSchedulerConfig;
    @Autowired
    private ShowService showService;

    @Autowired
    private MemberService memberService;

    @MockBean
    private ShowMapper mapper;  // Add this line to create a mock for ShowMapper

    @MockBean
    private AwsS3Service awsS3Service;

    @MockBean
    private ShowReservationService showReservationService;

    @MockBean
    private ShowTagService showTagService;
    @Autowired
    private MemberRepository memberRepository;

    @MockBean
    MemberBookMarkController memberBookMarkController;

    @MockBean
    MemberBookMarkService memberBookMarkService;

    @MockBean
    ScoreRepository scoreRepository;

    @MockBean
    RedisKey redisKey;

    @Autowired
    ShowController controller;

    @Autowired
    EntityManager em;

    @BeforeEach
    public void createMember(){
        Member member = MemberFactory.createMember();
       // memberRepository.save(member);

    }
    @DisplayName("제발 쫌")
    @Test
    @WithUserDetails(value = "test@gmail.com", userDetailsServiceBeanName = "customUserDetailsService", setupBefore = TestExecutionEvent.TEST_EXECUTION)
    public void testPostShow() throws Exception {
        // 테스트할 데이터 설정
        ShowDto.Post showPostDto = ShowFactory.createShowPostDto();
        Long memberId = 1L;
        LocalDate lo = LocalDate.now();

        gson = new GsonBuilder().registerTypeAdapter(LocalDate.class, new GsonTypeAdapter().nullSafe())
                .create();

//        ShowDto.Post post = new ShowDto.Post(
//                "title",
//                "content",
//                null,
//                "category",
//                100000,
//                "address",
//                "detailAddress",
//                null,
//                LocalDate.now(),
//                "12",
//                null,
//                37.58481899015186,
//                127.00088309891716,
//                100000,
//                new ArrayList<>()
//        );


        Show mockedShow = ShowFactory.createShow();
        ShowDto.PostResponse mockedResponse = ShowFactory.createShowPostResponse();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName(); // 현재 사용자의 이름

       // given(memberRepository.findById(anyLong())).willReturn(Optional.of(MemberFactory.createMember()));
      //  given(memberService.findVerifiedMember(Mockito.anyLong())).willReturn(null);
       // given(showService.createShow(any(), any(), anyLong())).willReturn(mockedShow);
        given(mapper.showPostDtoToShow(any())).willReturn(mockedShow);  // Use given() for mapper mock
        given(showTagService.createShowTagByShowAndTagsList(any(), any())).willReturn(new ArrayList<>());
        given(mapper.showToShowPostResponse(any())).willReturn(mockedResponse);  // Use given() for mapper mock

        //given
        mockMvc.perform(post(BASE_URL)
                        .param("memberId", "1")
                        .param("category", "연극")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(gson.toJson(showPostDto)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.data").exists())
                .andReturn();
    }
}



