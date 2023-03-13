//페이지, 리액트 컴포넌트, 정적 파일
import useSelectProfileLocationModalStore from "../../store/useSelectProfileLocationModalStore.js";
import useSelectedProfileLocationStore from "../../store/useSelectedProfileLocationStore.js";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeoulMap from "../Main/Popups/SeoulMap.jsx";

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

//라이브러리 및 라이브러리 메소드
import { React, useState } from "react";
import styled from "styled-components/macro";

const ModalBackdrop = styled.div`
  align-items: center;
  background-color: ${sub.sub800}D2;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const ModalWindow = styled.div`
  display: flex;
  height: max-content;
  position: relative;
  z-index: 40;
  width: 60%;
  min-height: 600px;
  background-color: ${sub.sub100};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 90%;
  }

  > svg {
    color: ${sub.sub400};
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 15px;
  }

  > .modal-inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    > span {
      color: ${sub.sub800};
      font-size: ${dtFontSize.medium};
      font-weight: 400;
    }

    > .button-container {
      display: flex;
      width: 200px;
      justify-content: space-between;
      margin-top: 50px;
    }

    > .selected-location-container {
      display: flex;
      align-items: center;

      > .location {
        color: ${sub.sub800};
        font-weight: 600;
        font-size: ${dtFontSize.medium};

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.medium};
        }
      }

      > .complete-button {
        width: 180px;
        padding: 5px 10px;
        border-radius: 20px;
        border: 2px solid ${sub.sub800};
        color: ${sub.sub800};
        font-weight: 600;
        font-size: ${dtFontSize.medium};
        margin-left: 20px;

        @media screen and (max-width: ${breakpoint.mobile}) {
          font-size: ${mbFontSize.medium};
          width: 100px;
        }

        &:hover {
          cursor: pointer;
          background-color: ${sub.sub300};
          color: white;
        }
      }
    }
  }
`;

export default function SelectProfileLocationModal() {
  const { openModal, setOpenModal } = useSelectProfileLocationModalStore(
    (state) => state
  );

  const { address, latitude, longitude, setLocation } =
    useSelectedProfileLocationStore((selectedLocation) => selectedLocation);

  const locationClickHandler = (e) => {
    setLocation(e.target.attributes.value.value);
  };

  return (
    <>
      {openModal === true ? (
        <ModalBackdrop onClick={setOpenModal}>
          <ModalWindow onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon icon={faTimes} size="2x" onClick={setOpenModal} />
            <div className="modal-inner-container">
              <SeoulMap clickHandler={locationClickHandler} />
              <div className="selected-location-container">
                <span className="location">지역 선택: {address}</span>
                <button className="complete-button" onClick={setOpenModal}>
                  선택 완료
                </button>
              </div>
            </div>
          </ModalWindow>
        </ModalBackdrop>
      ) : null}
    </>
  );
}
