import React, { useState } from "react";
import styled from "styled-components";
import { dtFontSize } from "../../styles/mixins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  align-items: center;

  ::after {
    content: "";
    width: 95%;
    margin-top: 10px;
    border-bottom: 1px solid black;
  }

  .request_container {
    /* position: relative; */
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: 30px;
  }

  .info_container {
    width: 80%;
    display: flex;

    .info {
      display: flex;
      flex-direction: column;

      .written_by {
        color: #aeaeae;
        font-size: ${dtFontSize.small};
      }
    }

    p {
      margin-right: 5px;
    }
  }

  .button_container {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    height: max-content;

    button {
      padding: 5px;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #00000057;
  backdrop-filter: blur(20px);
  z-index: 1;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;

    .button_container {
      margin-top: 10px;
      display: flex;
    }

    textarea {
      margin-top: 20px;
    }

    button {
      margin-right: 10px;
      padding: 5px 10px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const InputModal = ({ message, setMessage, handlers, modalStates }) => {
  const { setModalStates, approveReq, rejectReq } = handlers;
  const { purpose } = modalStates;
  const sendReqHandler = (purpose) => {
    return () => {
      if (purpose === "approve") {
        approveReq();
      } else {
        rejectReq();
      }
      setMessage("");
      setModalStates({ open: false });
    };
  };

  return (
    <Modal>
      <form>
        <label htmlFor="message">
          {purpose === "approve" ? "승인" : "거절"} 이유를 입력하십시오.
        </label>
        <textarea
          rows="5"
          cols="30"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          id="message"
        />
        <div className="button_container">
          <button onClick={sendReqHandler(purpose)}>send</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setModalStates({ open: false, purpose: "" });
              setMessage("");
            }}
          >
            close
          </button>
        </div>
      </form>
    </Modal>
  );
};

const ListCertBody = ({ data, index, handlers, queryKey }) => {
  const queryClient = useQueryClient();

  const { approve, reject } = handlers;
  const [message, setMessage] = useState("");
  const [modalStates, setModalStates] = useState({ open: false, purpose: "" });

  const { mutate: approveReq } = useMutation({
    mutationKey: ["approveCertReq", data.id],
    mutationFn: approve({ message, id: data.memberId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
  const { mutate: rejectReq } = useMutation({
    mutationKey: ["rejectCertReq", data.id],
    mutationFn: reject({ data: message, id: data.id }),
  });

  const modalHandlers = {
    setModalStates,
    approveReq,
    rejectReq,
  };

  return (
    <div className="request_container">
      {modalStates.open && (
        <InputModal
          message={message}
          setMessage={setMessage}
          handlers={modalHandlers}
          modalStates={modalStates}
        />
      )}
      <div className="info_container">
        <p>{index + 1 + "."}</p>
        <p data-id={data.memberId} className="username">
          {data.email}
        </p>
      </div>
      <div className="button_container">
        <button
          onClick={() => {
            setModalStates({ open: true, purpose: "approve" });
          }}
        >
          approve
        </button>
        <button
          onClick={() => {
            setModalStates({ open: true, purpose: "reject" });
          }}
        >
          reject
        </button>
      </div>
    </div>
  );
};

const ListCommentsBody = ({ data, index, handlers, queryKey }) => {
  const { remove } = handlers;
  const queryClient = useQueryClient();

  const { mutate: removeComment } = useMutation({
    mutationKey: ["deleteCommentAdmin", data.id],
    mutationFn: remove({ id: data.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="request_container">
      <div className="info_container">
        <p>{index + 1 + "."}</p>
        <div className="info">
          <p data-id={data.memberId} className="username">
            {data.comment}
          </p>
          <p className="written_by">{data.nickname}</p>
        </div>
      </div>
      <div className="button_container">
        <button onClick={removeComment}>remove</button>
      </div>
    </div>
  );
};

const ListDeletedBody = ({ data, index, handlers, queryKey }) => {
  const { restore } = handlers;
  const queryClient = useQueryClient();

  const { mutate: restoreComment } = useMutation({
    mutationKey: ["restoreCommentAdmin", data.id],
    mutationFn: restore({ id: data.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="request_container">
      {data ? (
        <>
          <div className="info_container">
            <p>{index + 1 + "."}</p>
            <div className="info">
              <p data-id={data.memberId} className="username">
                {data.comment}
              </p>
              <p className="written_by">{data.nickname}</p>
            </div>
          </div>
          <div className="button_container">
            <button onClick={restoreComment}>restore</button>
          </div>
        </>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default function List(props) {
  const listBodyReducer = (props) => {
    const { sort } = props;
    switch (sort) {
      case "cert":
        return ListCertBody(props);

      case "comments":
        return ListCommentsBody(props);

      case "deleted":
        return ListDeletedBody(props);

      default:
        return;
    }
  };

  if (props.data) {
    return <Container>{listBodyReducer(props)}</Container>;
  }
}
