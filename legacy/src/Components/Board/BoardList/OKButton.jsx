import styled from "styled-components";
import { primary, sub, dtFontSize } from "../../../styles/mixins";

const OKButton = styled.button`
  background-color: ${primary.primary200};
  border-radius: 20px;
  border: none;
  font-size: ${dtFontSize.medium};
  color: ${sub.sub100};
  cursor: pointer;

  & :hover {
    background-color: ${sub.sub500};
  }
`;

export default OKButton;
