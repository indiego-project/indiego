import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export function SuccessPage() {
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
        }/payments/success?paymentKey=${searchParams.get(
          "paymentKey"
        )}&orderId=${searchParams.get("orderId")}&amount=${searchParams.get(
          "amount"
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
      <h1>결제 성공</h1>
      <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
      <div>{`결제 금액: ${Number(
        searchParams.get("amount")
      ).toLocaleString()}원`}</div>
    </div>
  );
}
