import React from "react";
import styled from "styled-components";

import useTicketDataStore from "../../store/useTicketDataStore";
import useRequestPaymentsDataStore from "../../store/useRequestPaymentsDataStore";
import useReservationDateStore from "../../store/useReservationDateStore";
import { sub, mbFontSize } from "../../styles/mixins";
import breakpoint from "../../styles/breakpoint";

const TicketInfoTableComponent = styled.table`
  border-collapse: collapse;
  width: 60%;
  height: 24vh;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
  }

  > * {
    @media screen and (max-width: ${breakpoint.mobile}) {
      font-size: ${mbFontSize.medium};
    }
  }

  > th {
    text-align: center;
    background-color: ${sub.sub100};
    border-top: 1px solid ${sub.sub600};
    color: ${sub.sub600};

    vertical-align: top;
    vertical-align: bottom;
    vertical-align: middle;
  }
  > tr > td {
    border-top: 1px solid ${sub.sub600};
    border-bottom: 1px solid ${sub.sub600};
    text-align: center;

    vertical-align: top;
    vertical-align: bottom;
    vertical-align: middle;
  }
`;

export default function TicketInfoTable() {
  const { ticketData } = useTicketDataStore((state) => state);
  const { requestPaymentsData } = useRequestPaymentsDataStore((state) => state);
  const { reservationDate } = useReservationDateStore((state) => state);
  return (
    <TicketInfoTableComponent>
      <th>공연명</th>
      <th>공연자명</th>
      <th>티켓 수량</th>
      <th>결제가격</th>
      <th>예매일</th>
      <tr>
        <td>{ticketData.title}</td>
        <td>{ticketData.nickname}</td>
        <td>{requestPaymentsData.amount / ticketData.price}</td>
        <td>{requestPaymentsData.amount}</td>
        <td>{reservationDate}</td>
      </tr>
    </TicketInfoTableComponent>
  );
}
