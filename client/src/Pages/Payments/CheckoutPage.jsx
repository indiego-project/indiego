//페이지, 리액트 컴포넌트, 정적 파일
import TicketInfoTable from "../../Components/Payments/TicketInfoTable";

//로컬 모듈
import breakpoint from "../../styles/breakpoint";
import { primary, sub, dtFontSize, mbFontSize } from "../../styles/mixins";
import useTicketDataStore from "../../store/useTicketDataStore";
import useRequestPaymentsDataStore from "../../store/useRequestPaymentsDataStore";

//라이브러리 및 라이브러리 메소드
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const PaymentContainer = styled.div`
  width: 100%;
  padding: 5vw;
  height: max-content;
  display: flex;
  flex-direction: column;

  .ticket_info_container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5vw;

    @media screen and (max-width: ${breakpoint.mobile}) {
      align-items: center;
      flex-direction: column;
      width: 100%;
    }

    > .poster_image {
      height: 35vh;
      width: calc(35vh / 4 * 3);
      margin-right: 40px;

      @media screen and (max-width: ${breakpoint.mobile}) {
        margin-bottom: 30px;
      }
    }
  }
`;

const PaymentButton = styled.button`
  all: unset;
  color: white;
  cursor: pointer;
  width: 23.4%;
  height: 54px;
  border-radius: 8px;
  font-weight: 600;
  font-size: ${dtFontSize.medium};
  background-color: ${primary.primary300};
  margin: 5vw 38.3% 0 38.3%;
  padding: 11px 22px;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    background-color: ${primary.primary500};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${mbFontSize.medium};
    width: 100%;
    margin: 0;
  }
`;

const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 5%;
  border-bottom: 1px solid ${sub.sub200};
  min-height: 100px;
  padding: 30px 47px;

  > h1 {
    all: unset;
    color: ${primary.primary500};
    font-size: ${dtFontSize.xxlarge};
    font-weight: 700;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.xlarge};
    }
  }

  > h2 {
    all: unset;
    color: ${sub.sub400};
    font-size: ${dtFontSize.medium};
    font-weight: 400;
    margin: 5px 0 0 0;

    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }
`;

export default function CheckoutPage() {
  const { requestPaymentsData } = useRequestPaymentsDataStore((state) => state);
  const { ticketData } = useTicketDataStore((state) => state);
  const { PaymentWidget } = window;
  const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  const customerKey = "6WqdIxotUoYFqdnUx2_Uq";
  const paymentWidget = PaymentWidget(clientKey, customerKey); // 결제위젯 초기화
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!ticketData) {
      window.alert("결제 과정 중 오류가 발생했습니다. 다시 시도해주세요.");
      navigate(`/tickets/${params.id}`);
      return;
    }
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
    <>
      <PageTitleContainer>
        <h1>공연 결제하기</h1>
        <h2>*테스트 환경에서는 카드 결제만 지원합니다</h2>
      </PageTitleContainer>
      <PaymentContainer>
        <div className="ticket_info_container">
          <img className="poster_image" src={ticketData.image} alt="poster" />
          <TicketInfoTable />
        </div>
        <div id="widget_container" />
        <PaymentButton onClick={paymentClickHandler}>결제하기</PaymentButton>
      </PaymentContainer>
    </>
  );
}
