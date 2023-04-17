package codestates.frogroup.indiego.domain.show.controller;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.domain.show.dto.ShowDto;
import codestates.frogroup.indiego.domain.show.dto.ShowListDto;
import codestates.frogroup.indiego.domain.show.dto.ShowListResponseDto;
import codestates.frogroup.indiego.domain.show.dto.ShowMapsResponse;
import codestates.frogroup.indiego.domain.show.entity.Show;
import codestates.frogroup.indiego.domain.show.entity.ShowTag;
import codestates.frogroup.indiego.domain.show.mapper.ShowMapper;
import codestates.frogroup.indiego.domain.show.service.ShowReservationService;
import codestates.frogroup.indiego.domain.show.service.ShowService;
import codestates.frogroup.indiego.domain.show.service.ShowTagService;
import codestates.frogroup.indiego.global.dto.MultiResponseDto;
import codestates.frogroup.indiego.global.dto.PagelessMultiResponseDto;
import codestates.frogroup.indiego.global.dto.SingleResponseDto;
import codestates.frogroup.indiego.global.fileupload.AwsS3Path;
import codestates.frogroup.indiego.global.fileupload.AwsS3Service;
import codestates.frogroup.indiego.global.security.auth.loginresolver.LoginMemberId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/shows")
@Valid
@RequiredArgsConstructor
public class ShowController {
    private final ShowService showService;
    private final MemberService memberService;
    private final ShowMapper mapper;
    private final AwsS3Service awsS3Service;
    private final ShowReservationService showReservationService;
    private final ShowTagService showTagService;


    @PostMapping
    public ResponseEntity postShow(@Valid @RequestBody ShowDto.Post showPostDto,
                                   @LoginMemberId Long memberId){

        Show show = mapper.showPostDtoToShow(showPostDto);
        List<ShowTag> showTags = showTagService.createShowTagByShowAndTagsList(show, showPostDto.getTags());
        Show createdShow = showService.createShow(show, showTags, memberId);
        ShowDto.postResponse response = mapper.showToShowPostResponse(createdShow);

        return new ResponseEntity<>(new SingleResponseDto(response), HttpStatus.CREATED);
    }

    @PostMapping("/uploads")
    public ResponseEntity uploadProfileImage(@RequestParam MultipartFile file,
                                             @LoginMemberId Long loginMemberId){
        memberService.findVerifiedMember(loginMemberId);
        String url = awsS3Service.StoreImage(file, AwsS3Path.SHOWS);
        return new ResponseEntity<>(new SingleResponseDto<>(url), HttpStatus.CREATED);
    }


    @PatchMapping ("/{show-id}")
    public ResponseEntity patchShow(@PathVariable("show-id") long showId,
                                    @Valid @RequestBody ShowDto.Patch showPatchDto,
                                    @LoginMemberId Long memberId){

        Show updatedShow = showService.updateShow(showPatchDto, memberId, showId);
        ShowDto.Response response = mapper.showToShowResponse(updatedShow);
        response.setEmptySeats(showReservationService.getEmptySeats(updatedShow, showId));
        return new ResponseEntity<>(
                response, HttpStatus.OK
        );
    }

    @DeleteMapping("/{show-id}")
    public ResponseEntity deleteShow(@PathVariable("show-id") long showId,
                                     @LoginMemberId Long memberId){
        showService.deleteShow(showId, memberId);
        return new ResponseEntity<>(
                HttpStatus.NO_CONTENT
        );
    }



    @SchemaMapping(typeName = "Query", value = "getShow")
    public MultiResponseDto<ShowListDto> getShow(@Argument(name = "search") String search,
                                                 @Argument(name = "category") String category,
                                                 @Argument(name = "address") String address,
                                                 @Argument(name = "filter") String filter,
                                                 @Argument(name = "start") String start,
                                                 @Argument(name = "end") String end,
                                                 @Argument(name = "page") Integer page,
                                                 @Argument(name = "size") Integer size ){

        Pageable pageable = PageRequest.of(page, size);
        Page<ShowListDto> responses = showService.findShows(search, category, address, filter, start, end, pageable);

        return new MultiResponseDto<>(responses.getContent(), responses);
    }

    @SchemaMapping(typeName = "Query", value = "getShowById")
    public ShowDto.Response getShow(@Argument Long showId){

        return showService.findShow(showId);

    }

    @SchemaMapping(typeName = "Query", value = "getShowOfSeller")
    public List<ShowDto.showListToShowListResponseOfSeller> getShowsOfSeller(@Argument Integer page,
                                                                             @Argument Integer size,
                                                                             @AuthenticationPrincipal Member member){

        Pageable pageable = PageRequest.of(page, size);
        Page<Show> showPage = showService.findShowOfSeller(member.getId(), pageable);
        List<Show> shows = showPage.getContent();

        //Rssponse List생성해서 맵퍼 사용해서 데이터넣기
        //세터로 잔여좌석수, 현재 수익, 만료 여부 셋팅
        List<ShowDto.showListToShowListResponseOfSeller> response= new ArrayList<>();
        for(int i=0; i<shows.size(); i++){
            ShowDto.showListToShowListResponseOfSeller responseOfSeller =
                    ShowDto.showListToShowListResponseOfSeller.builder()
                        .id(shows.get(i).getId())
                        .title(shows.get(i).getShowBoard().getBoard().getTitle())
                        .nickname(shows.get(i).getMember().getProfile().getNickname())
                        .image(shows.get(i).getShowBoard().getBoard().getImage())
                        .detailAddress(shows.get(i).getShowBoard().getDetailAddress())
                        .showAt(shows.get(i).getShowBoard().getShowAt())
                        .expiredAt(shows.get(i).getShowBoard().getExpiredAt())
                            .address(shows.get(i).getShowBoard().getAddress())
                    .build();

            responseOfSeller.setEmptySeats(showReservationService.getEmptySeats(shows.get(i), shows.get(i).getId()));
            responseOfSeller.setRevenue(showService.getRevenue(shows.get(i).getId()));

            if(responseOfSeller.getEmptySeats().equals(0)){
                responseOfSeller.setExpired(true);
            }else{
                responseOfSeller.setExpired(false);
            }
            responseOfSeller.setTags(shows.get(i).getShowTags()
                    .stream()
                    .map(ShowTag::toResponseDto).
                    collect(Collectors.toList()));

            response.add(responseOfSeller);
        }

        return response;
    }




    @SchemaMapping(typeName = "Query", value = "getSortShows")
    public PagelessMultiResponseDto<ShowListDto> getSortShows(@Argument String address,
                                          @Argument String status) {
        List<ShowListDto> response = showService.findSortShows(address, status);
        return new PagelessMultiResponseDto<>(response);
    }

    @GetMapping("/location")
    public ResponseEntity getLocationShows(@RequestParam("address") String address){
        List<Show> shows = showService.findShows(address);
        List<ShowDto.ShowsResponse> showsResponses = mapper.showsToShowsResponse(shows);
        int total = showsResponses.size();
        return new ResponseEntity(new SingleResponseDto<>(new ShowDto.LocationResponse(total,showsResponses)),
                HttpStatus.OK);
    }

    @GetMapping("/marker")
    public ResponseEntity getMonthMarker(@Positive @RequestParam("year") Integer year,
                                         @Positive @RequestParam("month") Integer month){

       int[] hasShow = showService.findMarkerShows(year, month);

        return new ResponseEntity(new SingleResponseDto<>(hasShow), HttpStatus.OK);
    }

    @GetMapping("/dates")
    public ResponseEntity getCalendarList(@Positive @RequestParam("year") Integer year,
                                          @Positive @RequestParam("month") Integer month,
                                          @Positive @RequestParam("day") Integer day){
        List<Show> shows = showService.findCalendarShows(year, month, day);
        List<ShowDto.ShowsResponse> showsResponses = mapper.showsToShowsResponse(shows);

        return new ResponseEntity(new SingleResponseDto<>(showsResponses), HttpStatus.OK);
    }

    @GetMapping("/maps/location")
    public ResponseEntity getMapShows(@Positive @RequestParam("x1") Double x1,
                                      @Positive @RequestParam("x2") Double x2,
                                      @Positive @RequestParam("y1") Double y1,
                                      @Positive @RequestParam("y2") Double y2,
                                      @Positive @RequestParam(value = "level",required = false) Integer level){
        List<ShowMapsResponse> mapShows = showService.findMapShows(x1, x2, y1, y2);

        return new ResponseEntity(new SingleResponseDto<>(mapShows), HttpStatus.OK);
    }

    @GetMapping("/maps")
    public ResponseEntity getMapShowsSearch(@RequestParam("search") String search,
                                            @RequestParam("filter") String filter){
        log.info("# getMapShowsSearch 로직 실행됨");
        List<ShowMapsResponse> mapShows = showService.findMapShows(search,filter);

        return new ResponseEntity(new SingleResponseDto<>(mapShows), HttpStatus.OK);
    }
}
