import React, { useState } from "react";
import styled from "styled-components";
import { dtFontSize } from "../../styles/mixins";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 70%;
    height: max-content;
    min-height: 100px;
    border: 1px solid lightgrey;
    padding: 10px 0;

    .contents_container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: max-content;
      padding: 0 30px;
      /* background-color: blue; */

      .contents_title {
        font-size: ${dtFontSize.large};
        font-weight: 600;
      }
    }

    .pagination {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-top: 20px;
      /* background-color: purple; */

      .button_container {
        display: flex;
        align-items: center;
        width: 20%;
      }
    }

    .request_box {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;

      ::after {
        content: "";
        width: 95%;
        margin-top: 10px;
        border-bottom: 1px solid black;
      }
    }

    .request_container {
      position: relative;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      margin-top: 30px;
      /* background-color: red; */
    }

    .info_container {
      width: 80%;
      display: flex;

      p {
        margin-right: 5px;
      }
    }

    .button_container {
      width: 20%;
      display: flex;
      justify-content: space-evenly;
      height: max-content;
      /* background-color: green; */

      button {
        padding: 5px;

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const AdminMain = () => {
  const [performerData, setPerformerData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  return (
    <Container>
      <header>Indiego Admin</header>
      <main>
        <section>
          <div className="contents_container">
            <p className="contents_title">퍼포머 인증 신청 </p>
            <div className="request_box">
              <div className="request_container">
                <div className="info_container">
                  <p>1.</p>
                  <p className="username">username</p>
                </div>
                <div className="button_container">
                  <button>approve</button>
                  <button>reject</button>
                </div>
              </div>
            </div>
            <div className="pagination">
              <div className="button_container">
                <button>prev</button>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <button>next</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="contents_container">
            <p className="contents_title">모든 댓글</p>
            <div className="request_box">
              <div className="request_container">
                <div className="info_container">
                  <p>1.</p>
                  <p className="username">username</p>
                </div>
                <div className="button_container">
                  <button>restore</button>
                  <button>delete</button>
                </div>
              </div>
            </div>
            <div className="pagination">
              <div className="button_container">
                <button>prev</button>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <button>next</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};
