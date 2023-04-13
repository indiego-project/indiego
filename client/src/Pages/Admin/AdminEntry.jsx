import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .button_container {
    display: flex;
    width: 80%;
    height: max-content;
    justify-content: space-evenly;
    align-items: center;
  }

  button {
    width: 120px;
    height: 100px;
    padding: 0 20px;
    background-color: azure;

    :hover {
      cursor: pointer;
      background-color: gray;
    }
  }
`;

export const AdminEntry = () => {
  const navigate = useNavigate();

  const buttonClickHandler = (e) => {
    const { to: pathname } = e.target.dataset;
    navigate(pathname);
  };

  return (
    <Container>
      <div className="button_container">
        <button data-to="/" onClick={buttonClickHandler}>
          인디고 페이지 사용하기
        </button>
        <button data-to="/admin/main" onClick={buttonClickHandler}>
          어드민 페이지 사용하기
        </button>
      </div>
    </Container>
  );
};
