import React, { useState } from "react";
import styled from "styled-components";
import { sub, secondary, dtFontSize } from "../../styles/mixins";
import breakpoint from "../../styles/breakpoint";
import instance from "../../api/core/default";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding: 0 5%;
  margin-bottom: 100px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 20px 5.13%;
  }

  .title {
    align-items: center;
    display: flex;
    color: ${secondary.secondary600};
    display: flex;
    font-size: ${dtFontSize.xlarge};
    font-weight: 600;
    height: 24px;
    width: 80%;
    margin: 10px 0 20px 0;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 100%;
    }
  }

  .list_container {
    align-items: center;
    display: flex;
    height: max-content;
    min-height: 250px;
    width: 80%;
    background-color: white;
    border: 1px solid ${sub.sub300};
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: column;
    padding: 4%;

    @media screen and (max-width: ${breakpoint.mobile}) {
      width: 100%;
    }
  }
`;

export default function CertLists() {
  const [data, setData] = useState([]);
  const { id: memberId } = useParams();

  const fetchCertReq = () => {
    return instance.get(`/certifications/${memberId}`);
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchCertReq"],
    queryFn: fetchCertReq,
    onSuccess: (res) => {
      const { data } = res.data;
    },
    onError: (err) => {
      if (err.status === "404") {
        console.log("no  data for certreq");
      }
    },
  });

  return (
    <Container>
      <div className="title">나의 인증 신청 목록</div>
      <div className="list_container"></div>
    </Container>
  );
}
