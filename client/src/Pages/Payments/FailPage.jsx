import { React, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export function FailPage() {
  const [searchParams] = useSearchParams();

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const postData = () => {
    axios
      .post(
        `${
          process.env.REACT_APP_SERVER_URI
        }/payments/fail?code=${searchParams.get(
          "code"
        )}&message=${searchParams.get("message")}&orderId=${searchParams.get(
          "orderId"
        )}`,
        headers
      )
      .then((response) => console.log(response));
  };

  useEffect(() => {
    postData();
  }, []);

  return (
    <div>
      <h1>결제 실패</h1>
      <div>{`사유: ${searchParams.get("message")}`}</div>
    </div>
  );
}
