import React from "react";

import styled from "styled-components";
import { dtFontSize } from "../../../styles/mixins";
import breakpoint from "../../../styles/breakpoint";
import SeoulMap from "../../Main/Popups/SeoulMap";

import { useTicketSearchStore } from "../../../store/useTicketSearchStore";

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
  min-width: 300px;

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

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }
`;

export default function LocationSelect() {
  const { address } = useTicketSearchStore((state) => state.searchParams);
  const { setAddress } = useTicketSearchStore((state) => state);

  const addressClickHanlder = (e) => {
    const address = JSON.parse(e.target.attributes.value.value).address;
    setAddress(address);
  };

  return (
    <LocationPickerContainer>
      <p className="location">현재 지역: {address || "없음"}</p>
      <SeoulMapStyled clickHandler={addressClickHanlder} />
    </LocationPickerContainer>
  );
}
