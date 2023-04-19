import React, { useState } from "react";
import styled from "styled-components";
import { dtFontSize } from "../../styles/mixins";
import { ProtectRouter } from "./ProtectRouter";

import ListViewer from "../../Components/Admin/ListViewer";
import { AdminFeatures } from "../../Components/Admin/adminData";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  color: white;

  header {
    font-size: ${dtFontSize.xlarge};
    margin-top: 20px;
    font-weight: 600;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;

export const AdminMain = () => {
  return (
    <ProtectRouter>
      <Container>
        {/* <InputModal message={message} setMessage={setMessage} /> */}
        <header>Indiego Admin</header>
        <main>
          {AdminFeatures.map((listInfo, index) => {
            return <ListViewer key={index} listInfo={listInfo} />;
          })}
        </main>
      </Container>
    </ProtectRouter>
  );
};
