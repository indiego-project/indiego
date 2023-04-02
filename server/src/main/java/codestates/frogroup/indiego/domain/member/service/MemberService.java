package codestates.frogroup.indiego.domain.member.service;

import codestates.frogroup.indiego.config.AES128Config;
import codestates.frogroup.indiego.domain.common.embedding.Coordinate;
import codestates.frogroup.indiego.domain.common.utils.CustomBeanUtils;
import codestates.frogroup.indiego.domain.member.dto.MemberDto;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.entity.Profile;
import codestates.frogroup.indiego.domain.member.enums.ProfileImage;
import codestates.frogroup.indiego.domain.member.mapper.MemberMapper;
import codestates.frogroup.indiego.domain.member.repository.MemberRepository;
import codestates.frogroup.indiego.global.email.event.MemberRegistrationApplicationEvent;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ErrorResponse;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import codestates.frogroup.indiego.global.redis.RedisDao;
import codestates.frogroup.indiego.global.security.auth.dto.LoginDto;
import codestates.frogroup.indiego.global.security.auth.dto.TokenDto;
import codestates.frogroup.indiego.global.security.auth.jwt.TokenProvider;
import codestates.frogroup.indiego.global.security.auth.oauth.OAuthUserProfile;
import codestates.frogroup.indiego.global.security.auth.userdetails.AuthMember;
import codestates.frogroup.indiego.global.security.auth.utils.CustomAuthorityUtils;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.Duration;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static codestates.frogroup.indiego.domain.member.entity.Member.OAuthStatus.NORMAL;
import static codestates.frogroup.indiego.domain.member.entity.Member.OAuthStatus.OAUTH;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final CustomBeanUtils<Member> beanUtils;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final TokenProvider tokenProvider;
    private final RedisDao redisDao;
    private final ApplicationEventPublisher publisher;
    private final AES128Config aes128Config;

    private final MemberMapper memberMapper;

    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());
        makeSecretPassword(member);
        createRoles(member);
        member.setCoordinate(new Coordinate(null,null));
        member.setOAuthStatus(NORMAL);

        Member savedMember = memberRepository.save(member);

        // 회원가입 시 이메일 발송(계정 경로에 한글이 있는 경우 사용 불가능)
        publisher.publishEvent(new MemberRegistrationApplicationEvent(this, savedMember));

        return savedMember;
    }

    // OAuth2 인증 완료후 회원가입 및 업데이트
    public Member createOauth2Member(OAuthUserProfile userProfile, List<String> roles) {
        Optional<Member> member = memberRepository.findByEmail(userProfile.getEmail());
        if(member.isPresent()){
            if(member.get().getOAuthStatus().equals(OAUTH)){ // OAuth2 회원가입이 되어있는 경우 (업데이트)
                return member.map(m -> m.oauthUpdate(userProfile.getName(), userProfile.getEmail(),
                        userProfile.getImage(), roles, OAUTH)).orElse(null);
            } else { // 일반회원 가입이 되어있는 경우
                throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
            }
        } else {
            Member oauth2Member = userProfile.createOauth2Member(userProfile.getName(), userProfile.getEmail(),
                    userProfile.getImage(), roles, OAUTH);
            return memberRepository.save(oauth2Member);
        }
    }

    public Member updateMember(Member member, Long memberId) {
        Member findMember = findVerifiedMember(memberId);

        Optional.ofNullable(member.getProfile().getNickname())
                .ifPresent(nickname -> findMember.getProfile().setNickname(nickname));
        Optional.ofNullable(member.getProfile().getAddress())
                .ifPresent(address -> findMember.getProfile().setAddress(address));
        Optional.ofNullable(member.getProfile().getImage())
                .ifPresent(image -> findMember.getProfile().setImage(image));
        Optional.ofNullable(member.getProfile().getIntroduction())
                .ifPresent(introduction -> findMember.getProfile().setIntroduction(introduction));
        boolean latCheck = Optional.ofNullable(member.getCoordinate().getLatitude()).isPresent();
        boolean lonCheck = Optional.ofNullable(member.getCoordinate().getLongitude()).isPresent();
        if(latCheck && lonCheck){
            Coordinate coordinate = new Coordinate(member.getCoordinate().getLatitude(),
                    member.getCoordinate().getLongitude());
            findMember.setCoordinate(coordinate);
        }

        return findMember;
    }

    public void deleteMember(Long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    public ProfileImage createProfileImage(Member member){
        ProfileImage[] randomImageList = ProfileImage.values();
        Long profileImageIndex = Long.valueOf((int) ((Math.random() * 10)) % 7 +1);

        List<ProfileImage> profileImageList = Arrays.stream(randomImageList)
                .filter(image -> image.getIndex() == profileImageIndex)
                .collect(Collectors.toList());

        ProfileImage profileImage = profileImageList.get(0);
        member.getProfile().setImage(profileImage.getUrl());
        return profileImage;
    }

    public void reissueAccessToken(HttpServletRequest request, HttpServletResponse response){
        String secretRefreshToken = tokenProvider.resolveRefreshToken(request);
        validatedRefreshToken(secretRefreshToken);
        String accessToken = tokenProvider.resolveAccessToken(request);
        String refreshToken = aes128Config.decryptAes(secretRefreshToken);
        String redisAccessToken = redisDao.getValues(refreshToken);

        // Refresh Token이 Redis에 존재할 경우 Access Token 생성
        if(redisDao.validateValue(redisAccessToken) && accessToken.equals(redisAccessToken)){
            log.info("# RefreshToken을 통한 AccessToken 재발급 시작");
            Claims claims = tokenProvider.parseClaims(refreshToken); // Refresh Token 복호화
            String email = claims.get("sub", String.class); // Refresh Token에서 email정보 가져오기
            Member member = findVerifiedMember(email); // DB에서 사용자 정보 찾기
            AuthMember authMember = AuthMember.of(member.getId(), member.getEmail(), member.getRoles());
            TokenDto tokenDto = tokenProvider.generateTokenDto(authMember); // Token 만들기
            int refreshTokenExpirationMinutes = tokenProvider.getRefreshTokenExpirationMinutes();
            redisDao.setValues(refreshToken, tokenDto.getAccessToken(),
                    Duration.ofMinutes(refreshTokenExpirationMinutes));
            tokenProvider.accessTokenSetHeader(tokenDto.getAccessToken(),response);

        } else if(!redisDao.validateValue(redisAccessToken)){
            throw new BusinessLogicException(ExceptionCode.REFRESH_TOKEN_NOT_FOUND);
        } else {
            throw new BusinessLogicException(ExceptionCode.TOKEN_IS_NOT_SAME);
        }
    }

    public void logout(HttpServletRequest request){
        String secretRefreshToken = tokenProvider.resolveRefreshToken(request);
        validatedRefreshToken(secretRefreshToken);
        String refreshToken = aes128Config.decryptAes(secretRefreshToken);
        String redisAccessToken = redisDao.getValues(refreshToken);
        if(redisDao.validateValue(redisAccessToken)){
            redisDao.deleteValues(refreshToken);
        }
        deleteValuesCheck(refreshToken);
    }

    public void verifiedMemberId(Long memberId, Long loginMemberId){
        if(memberId.longValue() != loginMemberId.longValue()){
            log.info("memberId = {}, loginMemberId = {}",memberId,loginMemberId);
            throw new BusinessLogicException(ExceptionCode.MEMBER_IS_NOT_SAME);
        }
    }

    public Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Member findVerifiedMember(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        return optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public void validatedRefreshToken(String refreshToken){
        if(refreshToken == null){
            throw new BusinessLogicException(ExceptionCode.HEADER_REFRESH_TOKEN_NOT_FOUND);
        }
    }

    public void deleteValuesCheck(String refreshToken){
        String redisAccessToken = redisDao.getValues(refreshToken);
        if(redisAccessToken != null){
            throw new BusinessLogicException(ExceptionCode.TOKEN_DELETE_FAIL);
        }
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    private void createRoles(Member member){
        List<String> roles = authorityUtils.createRoles(member.getRoles().get(0));
        if(roles == null){
            throw new BusinessLogicException(ExceptionCode.MEMBER_ROLE_DOES_NOT_HAVE);
        }
        member.setRoles(roles);
        createProfileImage(member);
    }

    private void makeSecretPassword(Member member){
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
    }

    /**
     * 이메일 확인 실패시 회원 삭제
     */
    @Transactional
    public void emailVerifyFailed(Long id) {
        Member verifiedMember = findVerifiedMember(id);

        memberRepository.delete(verifiedMember);
    }

    //퍼포머 인증
    public MemberDto.GetResponse certifyPerformer(Long memberId){
        Member member = findVerifiedMember(memberId);
        if(!member.getRoles().get(0).equals("NON_CERTIFIED_PERFORMER") ){
            log.info("###권한 확인{}", member.getRoles().toString());
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_PERMISSION);
        }
        List<String> roles = member.getRoles();
        roles.set(0, "PERFOMER");
        member.setRoles(roles);
        MemberDto.GetResponse reponse =  memberMapper.memberToGetResponse(memberRepository.save(member));
        return  reponse;
    }


    public void checkRole( LoginDto loginDto){
        //findVerifiedMember(loginDto.getEmail());
        String role = findVerifiedMember(loginDto.getEmail()).getRoles().get(0);
        if(role =="NON_CERTIFIED_PERFORMER" ||  role =="PERFORMER"){
            if(!loginDto.getRole().equals("PERFORMER") ){
                throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
            }
        }
        if(role == "USER"){
            if(loginDto.getRole() != "USER" ){
                throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
            }
        }

    }
}
