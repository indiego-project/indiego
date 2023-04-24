import React, { useEffect } from "react";
import styled from "styled-components";

import useTicketDataStore from "../../store/useTicketDataStore";
import useRequestPaymentsDataStore from "../../store/useRequestPaymentsDataStore";
import useReservationDateStore from "../../store/useReservationDateStore";

const TicketInfoTableComponent = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  width: 60%;
  > th {
    width: 100px;
    height: 50px;
    text-align: center;
    border: 1px solid #000;

    vertical-align: top; /* 위 */
    vertical-align: bottom; /* 아래 */
    vertical-align: middle; /* 가운데 */
  }
  > tr > td {
    width: 100px;
    height: 50px;
    text-align: center;
    border: 1px solid #000;

    vertical-align: top; /* 위 */
    vertical-align: bottom; /* 아래 */
    vertical-align: middle; /* 가운데 */
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
