//페이지, 리액트 컴포넌트, 정적 파일
import dummyProfileImage from "../../assets/dummyProfileImage.jpg";
import performerBadge from "../../assets/performerBadge.jpg";
import useOpenModalStore from "../../store/useOpenModalStore.js";
import useProfileDataStore from "../../store/useProfileDataStore";
import WithdrawModal from "../../Components/Profile/WithdrawModal";
// import CertLists from "../../Components/Profile/CertLists";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import {
  primary,
  secondary,
  sub,
  misc,
  dtFontSize,
  mbFontSize,
} from "../../styles/mixins";
import instance from "../../api/core/default";
import useIsLoginStore from "../../store/useIsLoginStore";

//라이브러리 및 라이브러리 메소드
import { React, useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import AllShowListPerformer from "../../Components/Profile/AllShowListPerformer.jsx";
import { useQuery, useMutation } from "@tanstack/react-query";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 70%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }

  > .withdraw-button {
    all: unset;
    cursor: pointer;
    color: ${sub.sub400};
    font-size: ${dtFontSize.medium};
    font-weight: 400;
    margin-top: 5%;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

const ContentHeaderContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${sub.sub200};
  display: flex;
  height: max-content;
  justify-content: space-between;
  min-height: 140px;
  padding: 20px 40px;
  width: 80%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    min-height: 100px;
    padding: 20px;
    width: 100%;
  }
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    all: unset;
    color: ${secondary.secondary600};
    font-size: ${dtFontSize.xxlarge};
    font-weight: 700;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xlarge};
    }
  }
`;

const ContentInnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  padding: 0 5%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 20px 5%;
    height: max-content;
  }
`;

const ProfileInfoContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${sub.sub100};
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  min-height: 150px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    padding-bottom: 10px;
  }

  .performer-profile-container {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .performer-info-container {
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
  }

  > div {
    display: flex;
    align-items: flex-end;

    > img {
      border: 2px solid ${sub.sub200};
      border-radius: 100%;
      height: 120px;
      width: 120px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        height: 80px;
        width: 80px;
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      @media screen and (max-width: ${breakpoint.mobile}) {
        margin-left: 4%;
      }

      > .performer-nickname {
        color: ${secondary.secondary600};
        font-size: ${dtFontSize.xlarge};
        font-weight: 600;
        margin-bottom: 5px;
        width: max-content;

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.large};
        }
      }

      > div {
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        > .user-type {
          color: ${secondary.secondary600};
          font-size: ${dtFontSize.medium};
          font-weight: 600;

          @media screen and (max-width: ${breakpoint.mobile}) {
            font-size: ${mbFontSize.medium};
          }
        }

        > img {
          border-radius: 100%;
          width: 25px;
          height: 25px;
          margin-left: 5px;

          @media screen and (max-width: ${breakpoint.mobile}) {
            width: 20px;
            height: 20px;
          }
        }
      }

      > .performer-email {
        color: ${sub.sub400};
        font-size: ${dtFontSize.medium};
        font-weight: 400;

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.small};
        }
      }
    }
  }

  > .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 70%;

    @media screen and (max-width: ${breakpoint.mobile}) {
      margin-top: 15px;
      width: 100%;
    }

    > .profile-edit-button {
      all: unset;
      color: white;
      background-color: ${secondary.secondary500};
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      font-size: ${dtFontSize.medium};
      height: max-content;
      padding: 5px 20px;
      width: max-content;
      text-align: center;
      margin-top: 10px;

      &:hover {
        background-color: ${primary.primary200};
      }

      @media screen and (max-width: ${breakpoint.mobile}) {
        height: 25px;
        width: 90%;
        font-size: ${mbFontSize.medium};
      }
    }
  }
`;

const LocationandAboutContainer = styled.div`
  align-items: center;
  display: flex;
  height: max-content;
  min-height: 250px;
  width: 80%;
  background-color: ${sub.sub100};
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: column;
  padding: 4%;
  margin-top: 5%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
    padding: 7%;
  }

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;

    > .sub-title {
      color: ${secondary.secondary600};
      font-size: ${dtFontSize.large};
      font-weight: 600;
      margin-bottom: 5px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${dtFontSize.medium};
      }
    }

    > .sub-location-info {
      color: ${sub.sub800};
      font-size: ${dtFontSize.medium};
      font-weight: 600;
      margin-bottom: 30%;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.medium};
      }
    }

    > .sub-info {
      color: ${sub.sub800};
      font-size: ${dtFontSize.small};
      font-weight: 400;
      text-align: center;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.small};
      }
    }
  }
`;

export default function Profile() {
  const { openModal, setOpenModal } = useOpenModalStore((state) => state);
  const { profileData, setProfileData } = useProfileDataStore((state) => state);
  const [certStatus, setCertStatus] = useState(0); // 0: 인증X 요청 X, 1: 인증됨, 2: 요청됨
  const [certId, setCertId] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const { id: memberId } = params;
  const isLogin = !!localStorage.getItem("accessToken");

  useEffect(() => {
    if (!isLogin) {
      navigate("/notFound");
    }
  }, [isLogin]);

  const fetchData = () => {
    return instance({
      method: "get",
      url: `/members/${params.id}/mypage`,
    });
  };

  const fetchDataOnSuccess = (response) => {
    const { data } = response.data;
    const { role } = data;
    const { certiId: certId } = data;

    if (role === "PERFORMER") {
      setCertStatus(1);
    }

    if (certId && role.includes("NON")) {
      setCertId(certId);
      setCertStatus(2);
    }
    setProfileData(data);
  };

  const fetchDataOnError = (error) => {
    if (error.response.status === 400) {
      navigate("/notFound");
    }
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchPerformerProfileData"],
    queryFn: fetchData,
    keepPreviousData: true,
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });

  const handleMoveToEditPage = () => {
    navigate(`/mypage/${params.id}/edit`);
  };

  /** 퍼포머 인증신청 관련 */

  const fetchCertStatus = () => {
    return instance.get(`/certifications/${memberId}`);
  };

  const { isLoading: certStatusLoading } = useQuery({
    enabled: !!certId,
    queryKey: ["fetchCertReq", memberId],
    queryFn: fetchCertStatus,
    onSuccess: (res) => {
      const status = res.data.data.status.split("_")[1];
      if (status === "DENIED") {
        setCertStatus(0);
      } else if (status === "ASKED") {
        setCertStatus(2);
      }
    },
  });

  const approveRequest = () => {
    const data = { memberId };
    return instance({
      method: "post",
      data: data,
      url: "/certifications",
    });
  };

  const { mutate: approveRequestButtonHandler } = useMutation({
    mutationFn: approveRequest,
    mutationKey: "performerRequest",
    onSuccess: (res) => {
      window.alert("요청되었습니다.");
      setCertStatus(2);
    },
    onError: (err) => {
      window.alert("요청에 실패했습니다.");
    },
  });

  return (
    <Container>
      <WithdrawModal />
      <ContentHeaderContainer>
        <HeaderTitleContainer>
          <h1>마이페이지</h1>
        </HeaderTitleContainer>
      </ContentHeaderContainer>
      <ContentContainer>
        <ContentInnerContainer>
          <ProfileInfoContainer>
            <div className="performer-profile-container">
              <img
                alt="dummy profile"
                src={profileData && profileData.profile[0].image}
              />
              <div className="performer-info-container">
                <span className="performer-nickname">
                  {profileData && profileData.profile[0].nickname}
                </span>
                <div>
                  <span className="user-type">퍼포머 회원</span>
                  {certStatus === 1 && (
                    <img alt="performer badge" src={performerBadge} />
                  )}
                </div>
                <span className="performer-email">
                  {profileData && profileData.email}
                </span>
              </div>
            </div>
            <div className="button-container">
              <button
                className="profile-edit-button"
                onClick={handleMoveToEditPage}
              >
                프로필 수정하기
              </button>
              {certStatus === 1 ? (
                ""
              ) : certStatus === 2 ? (
                <p>요청이 처리중입니다.</p>
              ) : (
                <button
                  className="profile-edit-button"
                  onClick={approveRequestButtonHandler}
                >
                  퍼포머 인증 신청하기
                </button>
              )}
            </div>
          </ProfileInfoContainer>
          <LocationandAboutContainer>
            <div>
              <span className="sub-title">활동 지역</span>
              <span className="sub-location-info">
                {profileData && profileData.profile[0].address
                  ? profileData && profileData.profile[0].address
                  : "없음"}
              </span>
            </div>
            <div>
              <span className="sub-title">소개</span>
              <span className="sub-info">
                {profileData && profileData.profile[0].introduction
                  ? profileData && profileData.profile[0].introduction
                  : "없음"}
              </span>
            </div>
          </LocationandAboutContainer>
        </ContentInnerContainer>
        <AllShowListPerformer />
        {/* <CertLists /> */}
        <button className="withdraw-button" onClick={setOpenModal}>
          회원 탈퇴하기
        </button>
      </ContentContainer>
    </Container>
  );
}
