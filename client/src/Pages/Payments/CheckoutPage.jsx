import React, { useEffect } from "react";
import styled from "styled-components";
import useTicketDataStore from "../../store/useTicketDataStore";
import useRequestPaymentsDataStore from "../../store/useRequestPaymentsDataStore";
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

export default function CheckoutPage() {
  const { requestPaymentsData } = useRequestPaymentsDataStore((state) => state);
  console.log(requestPaymentsData);
  const { PaymentWidget } = window;
  const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  const customerKey = "6WqdIxotUoYFqdnUx2_Uq";
  const paymentWidget = PaymentWidget(clientKey, customerKey); // 결제위젯 초기화

  useEffect(() => {
    paymentWidget.renderPaymentMethods("#widget_container", 15000);
  }, []);

  const paymentClickHandler = () => {
    paymentWidget.requestPayment({
      orderId: requestPaymentsData.orderId,
      orderName: requestPaymentsData.orderName,
      successUrl: requestPaymentsData.successUrl,
      failUrl: requestPaymentsData.failUrl,
      customerEmail: requestPaymentsData.customerEmail,
      customerName: requestPaymentsData.customerName,
    });
  };

  return (
    <PaymentContainer>
      <div className="ticket_item_container">
        <div className="ticket_image_container">
          <img
            // src={ticketData.image}
            width="100px"
            height="150px"
            alt="poster"
          ></img>
        </div>
        <div className="ticket_info_container">
          {/* <p className="title">{ticketData.title}</p>
          <p className="artist">{ticketData.nickname}</p>
          <p className="price">{ticketData.price}원</p>
          <p className="showat">{ticketData.showAt}</p> */}
        </div>
      </div>
      <div id="widget_container"></div>
      <button onClick={paymentClickHandler}>결제하기</button>
    </PaymentContainer>
  );
}
