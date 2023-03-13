/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";

import { sub } from "../../../styles/mixins";

import styled from "styled-components";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: ${sub.sub800}D2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Overlay({ children, handler }) {
  return (
    <BackDrop
      onClick={() => {
        handler && handler(false);
      }}
    >
      {children}
    </BackDrop>
  );
}
