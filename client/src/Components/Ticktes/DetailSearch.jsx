import { sub } from "../../styles/mixins";
import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 50;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: ${sub.sub800 + "E0"};
  opacity: ${(props) => (props.trigger ? 1 : 0)};

  transition: opacity 0.3s;
`;

export default function DetailSearch({
  closeModal,
  trigger,
  handleTransition,
}) {
  const closeButtonHandler = () => {
    const body = document.querySelector("body");
    body.classList.remove("modal_open");
    closeModal(false);
  };

  return (
    <Overlay trigger={trigger} onTransitionEnd={handleTransition}>
      <button onClick={closeButtonHandler}>close</button>
    </Overlay>
  );
}
