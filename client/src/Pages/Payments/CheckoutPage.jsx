//페이지, 리액트 컴포넌트, 정적 파일
import TicketInfoTable from "../../Components/Payments/TicketInfoTable";

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
import useTicketDataStore from "../../store/useTicketDataStore";
import useRequestPaymentsDataStore from "../../store/useRequestPaymentsDataStore";

//라이브러리 및 라이브러리 메소드
import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

const PaymentContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;

  .ticket_item_container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .ticket_info_container {
    display: flex;
    flex-direction: column;
    padding: 10px 50px;
  }
`;

const PaymentButton = styled.button`
  all: unset;
  color: white;
  cursor: pointer;
  width: max-content;
  height: max-content;
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: ${dtFontSize.medium};
  background-color: ${primary.primary300};

  &:hover {
    background-color: ${primary.primary500};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
  }
`;

export default function CheckoutPage() {
  const { requestPaymentsData } = useRequestPaymentsDataStore((state) => state);
  const { ticketData } = useTicketDataStore((state) => state);
  const { PaymentWidget } = window;
  const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  const customerKey = "6WqdIxotUoYFqdnUx2_Uq";
  const paymentWidget = PaymentWidget(clientKey, customerKey); // 결제위젯 초기화

  useEffect(() => {
    paymentWidget.renderPaymentMethods(
      "#widget_container",
      requestPaymentsData.amount
    );
  }, []);

  const paymentClickHandler = () => {
    paymentWidget.requestPayment({
      orderId: requestPaymentsData.orderId,
      orderName: requestPaymentsData.orderName,
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/fail`,
      customerEmail: requestPaymentsData.customerEmail,
      customerName: requestPaymentsData.customerName,
    });
  };

  return (
    <PaymentContainer>
      <div className="ticket_item_container">
        <div className="ticket_image_container">
          <img
            src={ticketData.image}
            width="100px"
            height="150px"
            alt="poster"
          ></img>
        </div>
        <div className="ticket_info_container">
          <p className="title">{ticketData.title}</p>
          <p className="artist">{ticketData.nickname}</p>
          <p className="price">{ticketData.price}원</p>
          <p className="showat">{ticketData.showAt}</p>
        </div>
        <TicketInfoTable />
      </div>
      <div id="widget_container" />
      <div id="test" />
      <PaymentButton onClick={paymentClickHandler}>결제하기</PaymentButton>
    </PaymentContainer>
  );
}
