import React, { useState, useEffect } from "react";

import ListItem from "./ListItem.jsx";
import Spinner from "../../Spinner.jsx";

import breakpoint from "../../../styles/breakpoint.js";

import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { dtFontSize, mbFontSize, primary } from "../../../styles/mixins.js";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  height: 100%;
  flex-direction: column;

  .total_info {
    width: max-content;
    padding: 5px 30px;
    border-radius: 20px;
    background-color: ${primary.primary300};
    color: white;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.small};
    }
  }

  .total_info_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: max-content;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    height: 80%;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 80%;
    height: 150px;
  }

  .null_data_info_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${breakpoint.mobile}) {
      height: 150px;
    }
  }

  .null_data_info {
    font-size: ${dtFontSize.medium};
    font-weight: 600;
    color: ${primary.primary300};

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xsmall};
    }
  }

  .spinner_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${breakpoint.mobile}) {
      height: 150px;
    }
  }
`;

export default function List({ searchBy, search }) {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const serverURI = process.env.REACT_APP_SERVER_URI;

  const fetchListData = () => {
    if (searchBy === "location") {
      return axios.get(`${serverURI}/shows/location`, {
        params: { address: search },
      });
    } else if (searchBy === "date" && search) {
      return axios.get(`${serverURI}/shows/dates`, {
        params: { year: search.year, month: search.month, day: search.day },
      });
    }
  };

  const fetchListDataOnSuccess = (response) => {
    if (searchBy === "location") {
      const data = response.data.data.shows;
      const total = response.data.data.total;
      setData(data);
      setTotal(total);
    } else {
      const data = response.data.data;
      const total = response.data.data.length;
      setData(data);
      setTotal(total);
    }
  };

  const { isLoading, refetch: refetchListData } = useQuery({
    queryKey: ["fetchListData", searchBy, search],
    queryFn: fetchListData,
    onSuccess: fetchListDataOnSuccess,
  });

  useEffect(() => {
    refetchListData();
  }, [search]);

  return (
    <Container>
      <div className="total_info_container">
        <div className="total_info">{`${
          searchBy === "location"
            ? search
            : `${search.year}년 ${search.month}월 ${search.day}일`
        } : ${total}개`}</div>
      </div>
      <ListContainer>
        {isLoading ? (
          <div className="spinner_container">
            <Spinner />
          </div>
        ) : data.length === 0 ? (
          searchBy === "location" ? (
            <div className="null_data_info_container">
              <p className="null_data_info">
                해당 지역에 공연이 존재하지 않습니다.
              </p>
              <p className="null_data_info">다른 지역을 선택해 주세요.</p>
            </div>
          ) : (
            <div className="null_data_info_container">
              <p className="null_data_info">
                해당 날짜에 공연이 존재하지 않습니다.
              </p>
              <p className="null_data_info">다른 날짜를 선택해 주세요.</p>
            </div>
          )
        ) : (
          data &&
          data.map((data, index) => {
            return <ListItem data={data} key={index} />;
          })
        )}
      </ListContainer>
    </Container>
  );
}
