//페이지, 리액트 컴포넌트, 정적 파일
import dummyProfileImage from "../../assets/dummyProfileImage.jpg";
import useOpenModalStore from "../../store/useOpenModalStore.js";
import WithdrawModal from "../../Components/Profile/WithdrawModal";
import AllShowList from "../../Components/Profile/AllShowList.jsx";
import Spinner from "../../Components/Spinner";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import {
  primary,
  secondary,
  sub,
  dtFontSize,
  mbFontSize,
} from "../../styles/mixins";
import useIsLoginStore from "../../store/useIsLoginStore";

//라이브러리 및 라이브러리 메소드
import { React, useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import instance from "../../api/core/default";
import useProfileDataStore from "../../store/useProfileDataStore";

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
    color: ${primary.primary500};
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
  height: max-content;
  padding: 5%;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 20px 5%;
  }
`;

const ProfileInfoContainer = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid ${sub.sub100};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
  }

  > div {
    display: flex;
    align-items: flex-end;
    > img {
      border: 2px solid ${sub.sub200};
      border-radius: 100%;
      height: 140px;
      width: 140px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        height: 80px;
        width: 80px;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      margin: 0 0 4% 7%;
      width: max-content;

      @media screen and (max-width: ${breakpoint.mobile}) {
        margin-left: 4%;
      }

      > .user-nickname {
        color: ${primary.primary500};
        font-size: ${dtFontSize.xlarge};
        font-weight: 600;
        width: max-content;

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.large};
        }
      }

      > .user-email {
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
    justify-content: center;

    @media screen and (max-width: ${breakpoint.mobile}) {
      margin-top: 15px;
      width: 100%;
    }

    > .profile-edit-button {
      all: unset;
      color: white;
      background-color: ${primary.primary300};
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      font-size: ${dtFontSize.medium};
      height: max-content;
      padding: 5px 20px;
      width: max-content;
      text-align: center;

      &:hover {
        background-color: ${secondary.secondary500};
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
      color: ${primary.primary500};
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
  // const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const { profileData, setProfileData } = useProfileDataStore((state) => state);
  const navigate = useNavigate();
  const params = useParams();
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
    setProfileData(response.data.data && response.data.data);
  };

  const fetchDataOnError = (error) => {
    if (error.response.status === 400) {
      navigate("/notFound");
    } else if (error.response.status === 404) {
      navigate("/notFound");
    }
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchUserProfileData"],
    queryFn: fetchData,
    keepPreviousData: true,
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });

  const handleMoveToEditPage = () => {
    navigate(`/mypage/${params.id}/edit`);
  };

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
            <div>
              <img
                alt="dummy profile"
                src={profileData && profileData.profile[0].image}
              />
              <div>
                <span className="user-nickname">
                  {profileData && profileData.profile[0].nickname}
                </span>
                <span className="user-email">
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
        <AllShowList />
        <button className="withdraw-button" onClick={setOpenModal}>
          회원 탈퇴하기
        </button>
      </ContentContainer>
    </Container>
  );
}
