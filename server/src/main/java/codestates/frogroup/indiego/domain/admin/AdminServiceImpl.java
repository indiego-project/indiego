package codestates.frogroup.indiego.domain.admin;

import codestates.frogroup.indiego.domain.member.dto.MemberDto;
import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.member.mapper.MemberMapper;
import codestates.frogroup.indiego.domain.member.service.MemberService;
import codestates.frogroup.indiego.global.exception.BusinessLogicException;
import codestates.frogroup.indiego.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    MemberService memberService;
    MemberMapper memberMapper;
    @Override
    public CertificationDto.Response addPerformer(Member member) {
        try {
            Member findMember = memberService.findVerifiedMember(member.getId())

            List<String> roles = findMember.getRoles();
            roles.set(0, "PERFOMER");
            findMember.setRoles(roles);
            CertificationDto.Response response = new CertificationDto.Response("퍼포머 인증이 완료됐습니다");
            return response;
        }catch (Exception e){
            throw new BusinessLogicException(ExceptionCode.PERFORMER_ADD_FAILED);
        }
    }

    public CertificationDto.Response removeCertification(Certification certification){
        try{

        }catch (Exception e) {
            throw new BusinessLogicException(ExceptionCode.CERTIFICATION_REMOVE_FAILED);
        }
    }

    //퍼포머 인증
    public MemberDto.GetResponse certifyPerformer(Long memberId){
        Member member = memberService.findVerifiedMember(memberId);
        if(!member.getRoles().contains("NON_CERTIFIED_PERFORMER") ){
            log.info("###권한 확인{}", member.getRoles().toString());
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_PERMISSION);
        }
        List<String> roles = member.getRoles();
        roles.set(0, "PERFOMER");
        member.setRoles(roles);
        MemberDto.GetResponse reponse =  memberMapper.memberToGetResponse(memberRepository.save(member));
        return  reponse;
    }

}
