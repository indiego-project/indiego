/* eslint-disable react/prop-types */
import React, { useState } from "react";

import Board from "./Board.jsx";
import Spinner from "../../Spinner.jsx";

import { primary, dtFontSize } from "../../../styles/mixins";

import styled from "styled-components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const BoardsContainer = styled.div`
  width: 100%;
  height: 265px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    color: ${primary.primary500};
    font-size: ${dtFontSize.medium};
    margin-bottom: 10px;
  }
`;

const BoardList = styled.ul`
  width: 100%;
  padding: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-radius: 10px;

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      color: ${primary.primary500};
    }
  }
`;

export default function Boards({ category, children, path }) {
  const [data, setData] = useState([]);

  const serverURI = process.env.REACT_APP_SERVER_URI;

  const fetchBoardData = () => {
    return axios.get(`${serverURI}/articles/populars`, {
      params: { category },
    });
  };

  const fetchBoardDataOnSuccess = (response) => {
    const data = response.data.data;
    setData(data);
  };

  const { isLoading } = useQuery({
    queryKey: ["fetchBoardData", category],
    queryFn: fetchBoardData,
    onSuccess: fetchBoardDataOnSuccess,
  });

  return (
    <BoardsContainer>
      <h1>{children}</h1>
      <BoardList>
        {isLoading ? (
          <Spinner />
        ) : (
          data &&
          data.map((data, index, datas) => {
            if (index === datas.length - 1) {
              return (
                <Link
                  to={`board${path ? `/${path}` : ""}/${data.id}`}
                  key={data.id}
                >
                  <Board data={data} isLast={true} />
                </Link>
              );
            }
            return (
              <Link
                to={`board${path ? `/${path}` : ""}/${data.id}`}
                key={data.id}
              >
                <Board data={data} />
              </Link>
            );
          })
        )}
      </BoardList>
    </BoardsContainer>
  );
}
