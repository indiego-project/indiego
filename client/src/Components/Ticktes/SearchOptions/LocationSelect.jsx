import React, { useState } from "react";

import styled from "styled-components";
import { dtFontSize } from "../../../styles/mixins";
import SeoulMap from "../../Main/Popups/SeoulMap";

const LocationPickerContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .location {
    position: absolute;
    left: 0;
    top: -10px;
    font-size: ${dtFontSize.medium};
    font-weight: 600;
  }
`;

const SeoulMapStyled = styled(SeoulMap)`
  padding-top: 0;
  width: 60%;
  min-height: 400px;

  path:hover {
    transform: none;
  }

  text:hover {
    transform: none;
  }
`;

export default function LocationSelect() {
  return (
    <LocationPickerContainer>
      <p className="location">현재 지역: </p>
      <SeoulMapStyled />
    </LocationPickerContainer>
  );
}
