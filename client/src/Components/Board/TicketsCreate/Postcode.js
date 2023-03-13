import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { ChoiceButton } from "../../../Pages/Tickets/TicketsCreate.jsx";

export const Postcode = (props) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setPlace(fullAddress);
    props.setGu(fullAddress.split(" ")[1]);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <ChoiceButton type="button" onClick={handleClick}>
      공연 장소 선택하기
    </ChoiceButton>
  );
};
