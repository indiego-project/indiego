//페이지, 리액트 컴포넌트, 정적 파일
import Spinner from "../Components/Spinner";
import performerBadge from "../assets/performerBadge.jpg";

//로컬 모듈
import breakpoint from "../styles/breakpoint";
import {
  primary,
  secondary,
  sub,
  dtFontSize,
  mbFontSize,
} from "../styles/mixins";

//라이브러리 및 라이브러리 메소드
import { React, useEffect, useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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
`;

const ContentHeaderContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid ${sub.sub200};
  display: flex;
  height: max-content;
  justify-content: space-between;
  min-height: 120px;
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
    color: ${(props) => props.fontColor};
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
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
  }

  > img {
    border: 2px solid ${sub.sub200};
    border-radius: 100%;
    height: 140px;
    width: 140px;
    margin-bottom: 20px;

    @media screen and (max-width: ${breakpoint.mobile}) {
      height: 80px;
      width: 80px;
    }
  }

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${breakpoint.mobile}) {
      margin-left: 4%;
    }

    > .user-nickname {
      color: ${(props) => props.fontColor};
      font-size: ${dtFontSize.xlarge};
      font-weight: 600;
      margin-bottom: 10px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.large};
      }
    }

    > div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

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

    > .user-email {
      color: ${sub.sub400};
      font-size: ${dtFontSize.medium};
      font-weight: 400;

      @media screen and (max-width: ${breakpoint.mobile}) {
        font-size: ${mbFontSize.small};
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
      color: ${(props) => props.fontColor};
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
  const [data, setData] = useState();
  const [isPerformer, setIsPerformer] = useState(false);
  const params = useParams();

  const fetchData = () => {
    return axios.get(
      `${process.env.REACT_APP_SERVER_URI}/members/${params.id}`
    );
  };

  const fetchDataOnSuccess = (response) => {
    setData(response.data.data && response.data.data);
  };

  const fetchDataOnError = (error) => {
    window.alert("존재하지 않는 회원의 프로필입니다");
    history.back();
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchData,
    keepPreviousData: false,
    onSuccess: fetchDataOnSuccess,
    onError: fetchDataOnError,
    retry: false,
  });

  useEffect(() => {
    if (data && data.role === "PERFORMER") {
      setIsPerformer(true);
    }
  }, [data]);
  return (
    <Container>
      <ContentHeaderContainer>
        <HeaderTitleContainer
          fontColor={isPerformer ? secondary.secondary600 : primary.primary500}
        >
          <h1>회원 프로필</h1>
        </HeaderTitleContainer>
      </ContentHeaderContainer>
      <ContentContainer>
        <ContentInnerContainer>
          <ProfileInfoContainer
            fontColor={
              isPerformer ? secondary.secondary600 : primary.primary500
            }
          >
            <img alt="dummy profile" src={data && data.profile[0].image} />
            <div>
              <span className="user-nickname">
                {data && data.profile[0].nickname}
              </span>
              {isPerformer ? (
                <div>
                  <span className="user-type">퍼포머 회원</span>
                  <img alt="performer badge" src={performerBadge} />
                </div>
              ) : (
                ""
              )}
              <span className="user-email">{data && data.email}</span>
            </div>
          </ProfileInfoContainer>
          <LocationandAboutContainer
            fontColor={
              isPerformer ? secondary.secondary600 : primary.primary500
            }
          >
            <div>
              <span className="sub-title">활동 지역</span>
              <span className="sub-location-info">
                {data && data.profile[0].address
                  ? data && data.profile[0].address
                  : "없음"}
              </span>
            </div>
            <div>
              <span className="sub-title">소개</span>
              <span className="sub-info">
                {data && data.profile[0].introduction
                  ? data && data.profile[0].introduction
                  : "없음"}
              </span>
            </div>
          </LocationandAboutContainer>
        </ContentInnerContainer>
      </ContentContainer>
    </Container>
  );
}
